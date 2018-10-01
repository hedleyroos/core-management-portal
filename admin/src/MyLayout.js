/**
 * Generated MyLayout.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import Menu from './Menu';

const MySidebar = props => <Sidebar {...props} size={300} />;

const MyLayout = props => <Layout {...props} menu={Menu} sidebar={MySidebar} />;

export default MyLayout;
/** End of Generated MyLayout.js Code **/
