import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('./card.css');

class HomeContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            searchProducts: [],
            searchValue: '',
            persons: [],
            myid: 0,
            deletesuccess: false,
            originalProduct: []
        }

    }
    intializeState = () => {
        setTimeout(() => {
            this.setState({ deleteSuccess: false })
        }, 2000)
    }
    // componentWillMount() {

    //     this.getAllProducts()
    // }
    renderAllProducts = () => {
        let imageStyle = {
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            float: 'center'
        }
        
        return this.props.home.map(product => {
            return (
                <div class="column">
                <div class="card">

                    <img src={product.productImage} style={imageStyle}></img>
                    <h4>Id :  {product.id}</h4>
                    <h4 >Product Name :  {product.productName}</h4>
                    <h4>Product Price : {product.productPrice}</h4>
                    <h4>Product Stock : {product.productStock}</h4>
                    <h4>Product Description : {product.productDescription}</h4>
                    <h4>Product Category : {product.productCategory}</h4>
                    
                        <div>
                            <button onClick={this.editProductWithId} style={{ backgroundColor: "green" }}>Edit</button>
                            <button onClick={this.deleteCurrentProduct} style={{ float: "right", backgroundColor: "red" }}>Delete</button>
                        </div>
                </div>
            </div>
            );
        })

    }
    openAddProduct = () => {
        this.props.history.push('/addproduct')
    }
    render(){
        const topnav = {
            backgroundColor: "#333",
            overflow: "hidden",
            color: "#f2f2f2",
            padding: "14px 16px",
            font: "17px",
            float: "center"
        }
        
        return(
            <div>
                {/* <NavigationBar></NavigationBar> */}
                {/* <div>
                    <label>Search : </label>
                    <input type="text" onChange={this.getSearch}></input>
                </div> */}
                <br></br>
                
                    <button onClick={this.openAddProduct} style={topnav}>Add Product</button>
                <br></br>
                <br></br>

                <div class="row">

                    {this.renderAllProducts()}

                    <br></br>
                </div>


                {this.state.deleteSuccess &&
                    <div>
                        <h3>Product deleted success!!!!</h3>
                    </div>
                }
            </div>
        );
    }
    
}
function mapStateToProps(state){
    return{
        home:state.home
    }        
}
export default connect(mapStateToProps)(HomeContainer);