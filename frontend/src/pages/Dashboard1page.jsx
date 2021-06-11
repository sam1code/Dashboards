import React from 'react'
import '../Dashboard1Comp/allComp.css'
import Circles from '../Dashboard1Comp/Circles';
import Rightdgn from '../Dashboard1Comp/Rightdgn';
import Menu1 from '../Dashboard1Comp/Menu1'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import  Main1  from '../Dashboard1Comp/Main1';



const Dashboard1page = () =>{
    return (
        <div class="background">
            <Circles />
            <Rightdgn />
            <div className="main_bg">
                <Menu1 />
                <div className="main_div">
                    <Switch>
                        <Route  path='/' exact component={Main1}/>
                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default Dashboard1page
