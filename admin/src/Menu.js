/**
 * Generated Menu.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import InviteIcon from '@material-ui/icons/InsertInvitation';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ListIcon from '@material-ui/icons/ViewList';
import DeviceIcon from '@material-ui/icons/Devices';
import DomainIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import RoleIcon from '@material-ui/icons/Public';
import SecurityIcon from '@material-ui/icons/Security';
import SiteIcon from '@material-ui/icons/Explore';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SpeakerNoteIcon from '@material-ui/icons/SpeakerNotes';
import TerrainIcon from '@material-ui/icons/Terrain';
import CategoryIcon from '@material-ui/icons/AccountBalance';
import ContextSwitchIcon from '@material-ui/icons/SwapCalls';
import DeletedUserIcon from '@material-ui/icons/RecentActors';
import DeletedSiteIcon from '@material-ui/icons/LocationOff';
import { teal500 } from '@material-ui/core/colors';

import PermissionsStore from './auth/PermissionsStore';
import { titleCase, notEmptyObject } from './utils';
import { TITLES } from './constants';

const ICONS = {
    domains: <DomainIcon />,
    domainroles: <AccessibilityIcon />,
    invitations: <InviteIcon />,
    invitationredirecturls: <ListIcon />,
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
    credentials: <ListIcon />,
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

const Menu = ({ resources, onMenuClick, logout }) => {
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
                    onClick={onMenuClick}
                    leftIcon={<ContextSwitchIcon color={teal500} />}
                />
            ) : null}
            {resources
                ? resources.map(
                      resource =>
                          resource.hasList ? (
                              <MenuItemLink
                                  key={resource.name}
                                  to={`/${resource.name}`}
                                  primaryText={
                                      TITLES[resource.name]
                                          ? TITLES[resource.name]
                                          : `${titleCase(resource.name)}`
                                  }
                                  onClick={onMenuClick}
                                  leftIcon={ICONS[resource.name]}
                              />
                          ) : null
                  )
                : ''}
            <Responsive small={logout} medium={null} />
        </div>
    );
};

const mapStateToProps = state => ({
    resources: getResources(state)
});

export default connect(mapStateToProps)(Menu);
/** End of Generated Menu.js Code **/
