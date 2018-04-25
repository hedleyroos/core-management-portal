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

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/domains" primaryText="Domains" onClick={onMenuTap} leftIcon={<DomainIcon />} />
        <MenuItemLink to="/domainroles" primaryText="Domainroles" onClick={onMenuTap} leftIcon={<AccessibilityIcon />} />
        <MenuItemLink to="/invitations" primaryText="Invitations" onClick={onMenuTap} leftIcon={<InviteIcon />} />
        <MenuItemLink to="/invitationdomainroles" primaryText="Invitationdomainroles" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/invitationsiteroles" primaryText="Invitationsiteroles" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/permissions" primaryText="Permissions" onClick={onMenuTap} leftIcon={<FingerprintIcon />} />
        <MenuItemLink to="/resources" primaryText="Resources" onClick={onMenuTap} leftIcon={<ShoppingBasketIcon />} />
        <MenuItemLink to="/roles" primaryText="Roles" onClick={onMenuTap} leftIcon={<RoleIcon />} />
        <MenuItemLink to="/roleresourcepermissions" primaryText="Roleresourcepermissions" onClick={onMenuTap} leftIcon={<SecurityIcon />} />
        <MenuItemLink to="/sites" primaryText="Sites" onClick={onMenuTap} leftIcon={<SiteIcon />} />
        <MenuItemLink to="/siteroles" primaryText="Siteroles" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/userdomainroles" primaryText="Userdomainroles" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/usersiteroles" primaryText="Usersiteroles" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/usersitedata" primaryText="Usersitedata" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/adminnotes" primaryText="Adminnotes" onClick={onMenuTap} leftIcon={<SpeakerNoteIcon />} />
        <MenuItemLink to="/sitedataschemas" primaryText="Sitedataschemas" onClick={onMenuTap} leftIcon={<ListIcon />} />
        <MenuItemLink to="/clients" primaryText="Clients" onClick={onMenuTap} leftIcon={<DeviceIcon />} />
        <MenuItemLink to="/users" primaryText="Users" onClick={onMenuTap} leftIcon={<PeopleIcon />} />
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);
/** End of Generated Menu.js Code **/