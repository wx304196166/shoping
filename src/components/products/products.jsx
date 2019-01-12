/**
 * Created by katniss on 2017/5/3.
 */
import React from 'react';
import SingleProduct from './singleProduct';
import product from '../../style/imgs/product.png';
import './style.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { photo: '', summary: '时代峰峻客户水电费' },
        { photo: '', summary: 'sdfxcvsdf' },
        { photo: '', summary: '时代峰峻客户水电费' },
        { photo: '', summary: 'sdfxcvsdfwersdfsfxcv     sdfxvsdf' },
        { photo: '', summary: '时代峰峻客户水电费' },
      ]
    }
  }
  render() {
    const { products } = this.state;
    const productList = products && products.length > 0 && products.map((item, i) => {
      return <SingleProduct info={item} />
    });
    return (
      <div className="productContainer">
        <div className="productList">
          {productList}
        </div>
      </div>
    )
  }
}

export default Products;