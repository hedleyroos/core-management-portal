# core-management-portal

This repo houses the Global Management Portal (GMP) for the Girl Effect Internal Infrastructure.

## Getting Started

This repo has its own Dockerfile which is invoked in the complete `docker-compose` setup found on https://github.com/girleffect/core-general. If you have not setup the general dev environment of the entire Girl Effect Infrastructure, please go do that before attempting to dev on this repo.

The entire admin is housed in the directory `/admin` and was setup using `create-react-app`. A local `node_modules` can be created by running `yarn` in the `/admin` directory.

The `swagger-react-admin-generator` (https://github.com/davidoberholzer/swaggerreactadmingenerator) package used to generate the admin is a python package. Python Version > 3.6 must be used to guarantee generation order, therefore create a virutal environment within your local repo as such:

```
virtualenv -p python3.6 ve
```

And then install the package:

```
make requirements
```

or

```
/ve/bin/pip install -r requirements.txt
```

## Admin Generation

The React Admin generator package uses a swagger definition to generate all the LIST/SHOW/CREATE/EDIT react components for the admin as well as the filters and the main components.

The main benefit of using the generator is being able to update the specification and the tedious resource related react components are generated. The other functional code generated is edited to suit the custom needs of the GMP.

When generating the new management portal code, make sure to have `meld` installed on your system in order to manually diff the generated code from the existing Admin on Rest code.

To generate the following can be run:

```
make generate-admin
```

or without linux makefile abilities...

```
mkdir -p admin/generated

/ve/bin/python /ve/src/swagger-aor-generator/swagger_aor_generator/generator.py swagger/management_layer.yml --output-dir=admin/generated --module-name="Girl Effect Management Portal" --rest-server-url="//core-management-layer:8000" --permissions

./admin/prettier.sh

meld admin/src admin/generated

rm -rf admin/generated
```

After generation a prettier script will be run to improve the formatting of all generated files before diffing.

The meld command will bring up a visual diffing tool in order to compare the generated code before melding changes. This also avoids the overwriting of custom changes to the generated code.

## Authentication and Permissions

An important portion of the admin deals with the authentication flow and the permissions of a user.

### Authentication Flow

The Core Infrastructure uses an OIDC provider and flow. The login on the GMP is handled in the `/auth/authLogin.js` file. This creates a login URL on the Authentication Service providing the service a redirect url to hit on a successful login on the OIDC provider. The redirect will hit the react route `/oidc/callback` with a `token` and the component `/auth/OIDCCallback.js` will render. This component will verify the login process, verify/store the token and load/store user permissions to be given to React Admin to present the admin correctly.

Finally the `/auth/authClient.js` handles whenever a call is made and the user authentication is checked, or when an auth error occurs. Currently if the auth error is an `invalid_token` error, then the user will be redirected to login and will require to obtain a new token by just logging in again.

### User Permissions

The User permissions are required by admin on rest to omit the components and actions to those whom do not have permission to do so.

_NOTE_ The Management Layer API will not let the user perform an action if they do not have the correct permissions. Therefore if the user somehow performs an action they should not on the GMP, the API will deny the request based on the user making the request.

The User Permissions are stored locally. A singleton pattern of a `PermissionsStore` is created in the `auth/PermissionsStore.js`. This object can be importted anywhere and the user permissions can be obtained by using class methods:

```
getResourcePermission(resource, permission);

and

manyResourcePermissions(resourcePermissions)
```

This store is loaded on login.

The reason behind NOT using redux for this was that the React Admin resource list in `ReactAdmin.js` defines the resources loaded into the React Admin Redux store. If the permissions are kept on the Redux store (the redux store which is instantiated within the React Admin `Admin` component) then there is no way of refreshing the list of resources in `ReactAdmin.js` (besides unmounting it, which kills the store). Thus the decision was made to load the permissions prior to loading the `Admin` component and then the component can initialize the store with the correct list of resources and permissions.

There is a context switcher on the site where the user can select the different domain or site context they would like to view the admin in, thus changing the permissions. The context switcher route has a props `noLayout` to unmount the `Admin` in order to refresh the Redux store when the permissions have been changed.

## My Layout

The new React admin way to customise layout is through a `appLayout` props, where a `Mylayout` component is given containing your desired `Menu`, `AppBar` and `Notification` components.

## Menu

A custom `Menu` component is provided to a `MyLayout` component which is given to the React Admin `Admin` component. This `Menu` provides a place to have custom labels and material-ui icons for each resource. There are mappings for the icons in the component itself and the custom titles are housed in `constants.js`.

## dataProvider.js

This code is provided by the generator but the generator is out of date for this (no time to update it...). Therefore it is quite custom at the moment, DO NOT OVERWRITE WITH THE GENERATION OF NEW CODE.

This file converts a React Admin JSON request to a valid HTTP request and converts an HTTP response to JSON for the Admin to consume.

Here are some custom elements and mappings that are in this file to be noted:

`COMPOSITE_KEY_RESOURCES`: This is a mapping of all the resources which have composite primary keys on the db.

`PK_MAPPING`: This is a mapping for all resources that have primary keys with a different name to `id`.

`FILTER_LENGTHS`: This is GENERATED from the swagger spec for all filters that have character length specifications.

`DEFAULT_FILTERS`: This is a mapping of default filters to be included with list calls for a given resource. It is a function since it can change and must not be set on load.

Documentation for this project can be found here:
https://girleffect.github.io/core-management-portal/
