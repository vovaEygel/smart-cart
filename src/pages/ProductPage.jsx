import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from '../store/actions/ProductActions.js'
import ProductList from '../components/ProductList.jsx';
// import ProductFilter from '../cmps/ProductFilter';

class ProductPage extends Component {
  state = {
    filterBy: {
      term: '',
      color: '',
      isActive: false,
    },
  };

  async componentDidMount() {
    this.loadProducts();
    // console.log(this.props.products)
  }

  // onFilterHandler = (filterBy) => {
  //   this.setState((prevState) => {
  //     return {
  //       filterBy: {
  //         ...prevState.filterBy,
  //         ...filterBy,
  //       },
  //     };
  //   }, this.loadProducts);
  // };
  loadProducts = () => {
    this.props.loadProducts(this.state.filterBy);
  };

  render() {
    return (
      <div>
        {/* <ProductFilter
          filterBy={this.state.filterBy}
          onFilter={this.onFilterHandler}
        /> */}
        <h1>shop</h1>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
