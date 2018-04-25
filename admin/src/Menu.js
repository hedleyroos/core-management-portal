/**
 * Generated Menu.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/domains" primaryText="Domains" onClick={onMenuTap} />
        <MenuItemLink to="/domainroles" primaryText="Domainroles" onClick={onMenuTap} />
        <MenuItemLink to="/invitations" primaryText="Invitations" onClick={onMenuTap} />
        <MenuItemLink to="/invitationdomainroles" primaryText="Invitationdomainroles" onClick={onMenuTap} />
        <MenuItemLink to="/invitationsiteroles" primaryText="Invitationsiteroles" onClick={onMenuTap} />
        <MenuItemLink to="/permissions" primaryText="Permissions" onClick={onMenuTap} />
        <MenuItemLink to="/resources" primaryText="Resources" onClick={onMenuTap} />
        <MenuItemLink to="/roles" primaryText="Roles" onClick={onMenuTap} />
        <MenuItemLink to="/roleresourcepermissions" primaryText="Roleresourcepermissions" onClick={onMenuTap} />
        <MenuItemLink to="/sites" primaryText="Sites" onClick={onMenuTap} />
        <MenuItemLink to="/siteroles" primaryText="Siteroles" onClick={onMenuTap} />
        <MenuItemLink to="/userdomainroles" primaryText="Userdomainroles" onClick={onMenuTap} />
        <MenuItemLink to="/usersiteroles" primaryText="Usersiteroles" onClick={onMenuTap} />
        <MenuItemLink to="/usersitedata" primaryText="Usersitedata" onClick={onMenuTap} />
        <MenuItemLink to="/adminnotes" primaryText="Adminnotes" onClick={onMenuTap} />
        <MenuItemLink to="/sitedataschemas" primaryText="Sitedataschemas" onClick={onMenuTap} />
        <MenuItemLink to="/clients" primaryText="Clients" onClick={onMenuTap} />
        <MenuItemLink to="/users" primaryText="Users" onClick={onMenuTap} />
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);
/** End of Generated Menu.js Code **/