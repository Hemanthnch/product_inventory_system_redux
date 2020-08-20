import React,{Component} from 'react';
// 
import { Switch, Route } from "react-router-dom";

import AddProductContainer from './containers/addproductcontainer';
import HomeContainer from './containers/homecontainer';
import EditProductContainer from './containers/editproductcontainer'
// import EditProduct from './editproduct';

class Content extends Component {

    render() {

        return (
            <div>

                <Switch>
                    <Route exact path='/' component={HomeContainer}></Route>
                    
                    
                    <Route path='/addproduct' component={AddProductContainer}></Route>
                    <Route path='/editproduct' component={EditProductContainer}></Route>
                </Switch>
            </div>
        );
    }
}

export default Content;