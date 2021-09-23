import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const styles = {
    justifyContent: "start",
    height: "130vh",
    width: "15vw",
    top: 0,
    padding: 0,
    margin: 0,
    overflow: "auto",
    alignItems: "start"
};

const SideNav = () => {
    return (
        <ProSidebar style={styles}>
            <Menu iconShape="square">
                <MenuItem icon={<FontAwesomeIcon icon={faGoogle} />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FontAwesomeIcon icon={faFacebook} />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default SideNav;
