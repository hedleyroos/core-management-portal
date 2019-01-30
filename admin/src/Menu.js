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
import DeviceIcon from '@material-ui/icons/Devices';
import DomainIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import SecurityIcon from '@material-ui/icons/Security';
import SiteIcon from '@material-ui/icons/Explore';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SpeakerNoteIcon from '@material-ui/icons/SpeakerNotes';
import TerrainIcon from '@material-ui/icons/Terrain';
import CategoryIcon from '@material-ui/icons/AccountBalance';
import ContextSwitchIcon from '@material-ui/icons/SwapCalls';
import DeletedUserIcon from '@material-ui/icons/RecentActors';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DnsIcon from '@material-ui/icons/Dns';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SdStorageIcon from '@material-ui/icons/SdStorage';
import DeleteIcon from '@material-ui/icons/Delete';
import ExtensionIcon from '@material-ui/icons/Extension';
import SignalCellularNoSimIcon from '@material-ui/icons/SignalCellularNoSim';
import { teal500 } from '@material-ui/core/colors';

import PermissionsStore from './auth/PermissionsStore';
import { titleCase, notEmptyObject } from './utils';
import { TITLES } from './constants';

const ICONS = {
    sites: <SiteIcon />,
    credentials: <VpnKeyIcon />,
    siteroles: <AssignmentIcon />,
    deletionmethods: <DeleteIcon />,

    domains: <DomainIcon />,
    domainroles: <AccessibilityIcon />,

    invitations: <InviteIcon />,
    invitationdomainroles: <DnsIcon />,
    invitationsiteroles: <DnsIcon />,
    invitationredirecturls: <CompareArrowsIcon />,

    roles: <AssignmentIndIcon />,
    resources: <ShoppingBasketIcon />,
    permissions: <FingerprintIcon />,
    roleresourcepermissions: <SecurityIcon />,

    users: <PeopleIcon />,
    userdomainroles: <AssignmentIcon />,
    usersiteroles: <AssignmentIcon />,
    usersitedata: <SdStorageIcon />,

    deletedusers: <DeletedUserIcon />,
    deletedusersites: <SignalCellularNoSimIcon />,

    adminnotes: <SpeakerNoteIcon />,
    sitedataschemas: <ExtensionIcon />,

    clients: <DeviceIcon />,
    countries: <TerrainIcon />,
    organisations: <CategoryIcon />
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
