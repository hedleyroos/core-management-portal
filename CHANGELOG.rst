Changelog
=========

next
----
- All resources use `FieldSelectDatagrid`.
- User Settings are now obtained on login and stored locally.
- `query-string` npm package version changed to support production build.
- `ConfirmDialog` now supports optional text inputs with validation.
- Added `reason` input to deleting a user, saves as field in DeletedUser entry.
- Updated docker files to support production build with build args.
- User delete button hidden on own user's show view.
- Manage Roles pages only allow assignment of roles that are available on a given domain or site, more info shown if no roles are available.

1.2.0
-----
- React Beautiful DND package added.
- `EditableDatagrid` component added and replaced all List instances of `Datagrid` with new grid component.
- `FieldSelectDatagrid` component now uses `EditableDatagrid`.
- Fixed bug where `manageRoles` redux store is not reset on a different object being managed.

1.1.0
-----
-  Some documentation added.
-  Unused var removed
-  Purge expired invitations with async task. Added condition to show manage user roles if user has an organisation_id.
-  Regenerated for date-time range filter for user date_joined field
-  Merged all stores into one general ManageRoles store. Manage roles page gets its iidentity from the route visited.
-  Fixed some naming issues
-  AssignUserRoleCard changed back to before to keep history
-  PR fixes of filename typo and some improvements
-  Modified manage user roles reducer and removed properly from menu.
-  Added modifications to pages and custom actions.
-  Added actions and reducers for shared resources. Entry point to manage user roles page changed in route and removed from menu.
-  Added common manage utils file.
-  Added Manage invitations page with addition to store and redux actions/reducers. Shared store data added for both manage pages. Manage User Roles and Manage Invitation Role entrypoints now come from a "Manage Roles" action on the object show view.
-  Added Logout leaving page and custom logout flow. Improves UX.
-  Fixed instance where a user has no permissions.
-  Moved user treeData to Permissions store. Then added current context logic on login.
-  View deleted users and go green
-  Added missing x-related-info definitions and regenerated code
-  Use newer version of the prettier tool
-  Added deletedusersites composite key definition
-  Fixed Showing of context switcher with only one context/
-  Added double check for correct search state.
-  Fixed bug with manage user roles search and omitted own user in search results.
-  Don't go back to user listing of delete request fail.
-  Added delete button to user's show to hit specific endpoint. Removed delete from listing page. Confirm Dialog moved to better place. Improved look of new menu items. Added titles as well. Fixed endpoint names.
-  Added custom delete page for a stern warning.
-  Added DeletedUser and DeletedUserSite tables.
-  Minor fix for filter lengths
-  Added purge expired invites button to Invitations page.
-  Simple general change to all fields being unsortable, only user_id is sortable atm. Url Fields added.

1.0.1
-----
#. Added `context_switcher`,
#. Added default filter for user search based on current context.
#. Manage user role page fixes.
#. Improvements to error and success notifications.
#. Redundant permissions no longer stored on Redux store.
#. Manage User Roles page moved to Redux store.
#. Organisations create/edit/delete views and permission added.
#. Table field renamed to InlineTable and can be paginated now.
#. Prettier generation make command.

1.0.0
-----
- Initial release

