import React from 'react';
import { withRouter } from "react-router-dom"

class NotificationBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getButtonClicked=()=>{
        this.props.history.push('/')
    }
    
    render() {
        let loggedIn = localStorage.getItem("loggedIn")
        const menuitem = {
            color: "black",
            backgroundColor: "blue",

            display: 'inline',
            padding: '5px',
            margin: '5px',
            float: "right"

        }
        const topnav = {
            backgroundColor: "blue",
            overflow: "hidden",
            color: "#f2f2f2",
            font: "17px"
        }
            


        return (

            <div style={topnav}>
                <h1 style={{ color: "black" }}>Product Inventory System</h1>
                <h3 style={menuitem}>
                    <button type="button" onClick={this.getButtonClicked} >Home</button>
                </h3>
                
            </div>
        );


    }

}

export default withRouter(NotificationBarContainer);