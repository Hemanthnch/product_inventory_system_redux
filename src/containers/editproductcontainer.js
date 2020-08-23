import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import editProductBroadcast from '../actions/editproductbroadcast'

class EditProductContainer extends React.Component {
    constructor(props) {
        super(props)
        let product = this.props.product.filter(pro => {
            return pro.id === this.props.location.state.myid
        })
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        this.state = {
            id:product[0].id,
            productName: product[0].productName,
            productPrice: product[0].productPrice,
            productStock: product[0].productStock,
            productDescription: product[0].productDescription,
            productCategory: product[0].productCategory,
            productImage: product[0].productImage,

            productnameerror: '',
            productpriceerror: '',
            productstockerror: '',
            productdescriptionerror: '',
            productcategoryerror: '',
        }
    }
    checkValidation = (event) => {
        let productNameError = ''
        let productPriceError = ''
        let productStockError = ''
        let productDescriptionError = ''
        let productCategoryError = ''

        if (event === 'productName' && this.state.productName === '') {
            productNameError = <p style={{ color: 'red' }}>Product Name is Required</p>
        }

        if (event === 'productPrice' && this.state.productPrice === '') {
            productPriceError = <p style={{ color: 'red' }}>Product Price is Required</p>
        }

        if (event === 'productStock' && this.state.productStock === '') {
            productStockError = <p style={{ color: 'red' }}>Product Stock is Required</p>
        }

        if (event === 'productDescription' && this.state.productDescription === '') {
            productDescriptionError = <p style={{ color: 'red' }}>Product Description is Required</p>
        }

        if (event === 'productCategory' && this.state.productCategory === '') {
            productCategoryError = <p style={{ color: 'red' }}>Product Category is Required</p>
        }
        if (productNameError || productPriceError || productStockError || productDescriptionError || productCategoryError) {
            this.setState({
                productnameerror: productNameError,
                productpriceerror: productPriceError,
                productstockerror: productStockError,
                productdescriptionerror: productDescriptionError,
                productcategoryerror: productCategoryError
            })
            return false
        }
        this.setState({
            productnameerror: '',
            productpriceerror: '',
            productstockerror: '',
            productdescriptionerror: '',
            productcategoryerror: ''
        })
        return true

    }
    
    getProductName = (event) => {
        this.setState({ productName: event.target.value })
    }
    getProductPrice = (event) => {
        this.setState({ productPrice: event.target.value })
    }
    getProductStock = (event) => {
        this.setState({ productStock: event.target.value })
    }
    getProductDescription = (event) => {
        this.setState({ productDescription: event.target.value })
    }
    getProductCategory = (event) => {
        this.setState({ productCategory: event.target.value })
    }
    getProductNameError = (event) => {
        this.setState({ productName: event.target.value })
        this.checkValidation('productName')
    }
    getProductPriceError = (event) => {
        this.setState({ productPrice: event.target.value })
        this.checkValidation('productPrice')
    }
    getProductStockError = (event) => {
        this.setState({ productStock: event.target.value })
        this.checkValidation('productStock')
    }
    getProductDescriptionError = (event) => {
        this.setState({ productDescription: event.target.value })
        this.checkValidation('productDescription')
    }
    getProductCategoryError = (event) => {
        this.setState({ productCategory: event.target.value })
        this.checkValidation('productCategory')
    }
    editProduct = () => {
        // console.log('Edit Product via axios and put')
        let editproduct = {
            id: this.state.id,
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productStock: this.state.productStock,
            productDescription: this.state.productDescription,
            productCategory: this.state.productCategory,
            productImage: this.state.productImage
        }
        this.props.sendNewEditProduct(editproduct)
        this.props.history.push('/')
    }

    render() {
        const menuitem = {
            color: "black",
            backgroundColor: "cyan",
            display: 'block-inline',
            padding: '10px',

            margin: '100px',
        }
        const mystyle = {
            color: "Black",
            backgroundColor: "white",
            padding: "10px",
            width: "400px",
            display: "inline-block",
            margin: "20px",
            border: "15px solid blueviolet"
        };

        return (
            <div>

                {/* <h1>Edit Product with Id : {this.props.location.state.myid}  </h1> */}
                <div>


                    <form style={mystyle}>
                        <h1>Edit Product</h1>
                        <h3>Id : </h3>
                        <input type="text" value={this.state.id} readOnly></input>


                        <h3>Product Name: </h3>
                        <input type='text' id="productName" value={this.state.productName} onChange={this.getProductName} onBlur={this.getProductNameError}></input>
                        {this.state.productnameerror}

                        <h3>Product Price :</h3>
                        <input type='text' id="productPrice" value={this.state.productPrice} onChange={this.getProductPrice} onBlur={this.getProductPriceError}></input>
                        {this.state.productpriceerror}

                        <h3>Product Stock : </h3>
                        <input type='number' id="productStock" value={this.state.productStock} onChange={this.getProductStock} onBlur={this.getProductStockError}></input>
                        {this.state.productstockerror}

                        <h3>Product Description : </h3>
                        <input type='text' id="productDescription" value={this.state.productDescription} onChange={this.getProductDescription} onBlur={this.getProductDescriptionError}></input>
                        {this.state.productdescriptionerror}

                        <h3 for="cat">Product Category : </h3>
                        <select name="category" id="productCategory" onChange={this.getProductCategory} onBlur={this.getProductCategoryError}>
                            <option>{this.state.productCategory}</option>
                            <option value="Electronics" onChange={this.getProductCategory}>Electronics</option>
                            <option value="stationary" onChange={this.getProductCategory}>Stationary</option>
                            <option value="Groceries" onChange={this.getProductCategory}>Groceries</option>
                            <option value="Plumbing" onChange={this.getProductCategory}>Vegetables</option>

                        </select>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={this.editProduct} style={{ backgroundColor: "green" }}><b>Edit Product</b></button>


                    </form>

                </div>
            </div>
        );
    }
}
function convertStoreToProps(store) {
    console.log(store)
    return {

        product: store.home

    }
}
function convertPropToEventAndBroadcast(dispatch) {
    return bindActionCreators({
        sendNewEditProduct: editProductBroadcast
    }, dispatch)
}
export default connect(convertStoreToProps, convertPropToEventAndBroadcast)(EditProductContainer);