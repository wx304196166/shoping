import React from 'react';
import SingleProduct from './singleProduct';
import Divide from './brand/divide';
import './style.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { photo: '', title: 'led2', summary: '时代峰峻客户水电费' },
        { photo: '', title: '啊目的', summary: 'sdfxcvsdf' },
        { photo: '', title: 'led2', summary: '时代峰峻客户水电费' },
        { photo: '', title: 'led2', summary: 'sdfxcvsdfwersdfsfxcv     sdfxvsdf' },
        { photo: '', title: 'led2', summary: '时代峰峻客户水电费' },
      ]
    }
  }
  render() {
    const { products } = this.state;
    const productList = products && products.length > 0 && products.map((item, i) => {
      return <SingleProduct info={item} key={i} />
    });
    return (
      <div className="productContainer">
        <Divide />
        <div className="productList">
          {productList}
        </div>
      </div>
    )
  }
}

export default Products;