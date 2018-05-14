/**
 * Generated Menu.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';
import AccessibilityIcon from 'material-ui/svg-icons/action/accessibility';
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
import { titleCase } from './utils';

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
    adminnotes: <SpeakerNoteIcon />,
    sitedataschemas: <ListIcon />,
    clients: <DeviceIcon />,
    users: <PeopleIcon />,
};

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        {resources
            ? resources.map(resource => (
                    <MenuItemLink
                        key={resource.name}
                        to={`/${resource.name}`}
                        primaryText={`${titleCase(resource.name)}`}
                        onClick={onMenuTap}
                        leftIcon={ICONS[resource.name]}
                    />
                ))
            : ''}
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state)
});
export default connect(mapStateToProps)(Menu);
/** End of Generated Menu.js Code **/
