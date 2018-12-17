import React, { Component } from "react";

class Sidebar extends Component{
    render(){
        return(

            <div className="sidebar">
                <div className="TodoFilter">
                    <input id="filterTodo" placeholder="Search"></input>
                </div>
                
                <ul className="nav">
                    <li>All Task</li>
                    <li>Complete</li>
                    <li>Incomplete</li>
                    <li><button className="newtask">+ New Task</button></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
