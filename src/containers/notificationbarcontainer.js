import React from 'react';
import { Link } from 'react-router-dom';



class NotificationBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        let loggedIn = localStorage.getItem("loggedIn")
        const menuitem = {
            color: "black",
            backgroundColor: "cyan",

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
                
            </div>






        );


    }

}

export default NotificationBarContainer;