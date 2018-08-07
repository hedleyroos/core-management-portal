/**
 * Generated Menu.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';
import AccessibilityIcon from 'material-ui/svg-icons/action/accessibility';
import ManageIcon from 'material-ui/svg-icons/action/build';
import InviteIcon from 'material-ui/svg-icons/editor/insert-invitation';
import FingerprintIcon from 'material-ui/svg-icons/action/fingerprint';
import ListIcon from 'material-ui/svg-icons/action/view-list';
import DeviceIcon from 'material-ui/svg-icons/device/devices';
import DomainIcon from 'material-ui/svg-icons/action/language';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import RoleIcon from 'material-ui/svg-icons/social/public';
import SecurityIcon from 'material-ui/svg-icons/hardware/security';
import SiteIcon from 'material-ui/svg-icons/action/explore';
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket';
import SpeakerNoteIcon from 'material-ui/svg-icons/action/speaker-notes';
import TerrainIcon from 'material-ui/svg-icons/maps/terrain';
import CategoryIcon from 'material-ui/svg-icons/action/account-balance';
import ContextSwitchIcon from 'material-ui/svg-icons/communication/swap-calls';
import DeletedUserIcon from 'material-ui/svg-icons/av/recent-actors';
import DeletedSiteIcon from 'material-ui/svg-icons/communication/location-off';
import { teal500 } from 'material-ui/styles/colors';

import PermissionsStore from './auth/PermissionsStore';
import { titleCase, notEmptyObject } from './utils';
import { TITLES, PERMISSIONS } from './constants';

const ICONS = {
    domains: <DomainIcon />,
    domainroles: <AccessibilityIcon />,
    invitations: <InviteIcon />,
    invitationdomainroles: <ListIcon />,
    invitationsiteroles: <ListIcon />,
    permissions: <FingerprintIcon />,
    resources: <ShoppingBasketIcon />,
    roles: <RoleIcon />,
    roleresourcepermissions: <SecurityIcon />,
    sites: <SiteIcon />,
    siteroles: <ListIcon />,
    userdomainroles: <ListIcon />,
    usersiteroles: <ListIcon />,
    usersitedata: <ListIcon />,
    deletedusers: <DeletedUserIcon />,
    deletedusersites: <DeletedSiteIcon />,
    adminnotes: <SpeakerNoteIcon />,
    sitedataschemas: <ListIcon />,
    clients: <DeviceIcon />,
    countries: <TerrainIcon />,
    organisations: <CategoryIcon />,
    users: <PeopleIcon />
};

const Menu = ({ resources, onMenuTap, logout }) => {
    const contexts = PermissionsStore.getAllContexts();
    const showContextSwitcher = Object.keys(contexts).length > 1;
    return (
        <div>
            {notEmptyObject(contexts) && showContextSwitcher ? (
                <MenuItemLink
                    to="/contextchanger"
                    primaryText={`Context: ${titleCase(
                        PermissionsStore.getCurrentContext()
                            .obj.name.split('_')
                            .join(' ')
                    )}`}
                    onClick={onMenuTap}
                    leftIcon={<ContextSwitchIcon color={teal500} />}
                />
            ) : null}
            {resources
                ? resources.map(resource => (
                      <MenuItemLink
                          key={resource.name}
                          to={`/${resource.name}`}
                          primaryText={
                              TITLES[resource.name]
                                  ? TITLES[resource.name]
                                  : `${titleCase(resource.name)}`
                          }
                          onClick={onMenuTap}
                          leftIcon={ICONS[resource.name]}
                      />
                  ))
                : ''}
            {PermissionsStore.manyResourcePermissions(PERMISSIONS.manageuserroles) ? (
                <MenuItemLink
                    to="/manageuserroles"
                    primaryText="Manage User Roles"
                    onClick={onMenuTap}
                    leftIcon={<ManageIcon />}
                />
            ) : null}
            {logout}
        </div>
    );
};

const mapStateToProps = state => ({
    resources: getResources(state)
});
export default connect(mapStateToProps)(Menu);
/** End of Generated Menu.js Code **/
