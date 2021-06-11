import React from 'react'
import { BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import "./allComp.css"
import Logo from "../Assets1/Logo.png"
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FolderIcon from '@material-ui/icons/Folder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Dashboaard2page from '../pages/Dashboaard2page'

function Menu1() {
    return (
        <Router>
            <Switch>
                <div className="icon_menu">
                    <img className="logo" src={Logo} alt="" />
                    
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/"><HomeIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/assessment"><AssessmentIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/workout"><WorkOutlineIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/folder"><FolderIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/event"><EventAvailableIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/people"><PeopleAltOutlinedIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/chat"><ChatIcon /></NavLink>
                    <NavLink exact className="icon" activeClassName="active-nav-1" to="/Dashboaard2page"><ExitToAppIcon /></NavLink>
                    
                </div>
                </Switch>
            </Router>
    )
}

export default Menu1
