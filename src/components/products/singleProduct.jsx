/**
 * Created by katniss on 2017/5/3.
 */
import React from 'react';
import product from '../../style/imgs/product.png';
import './style.scss';

class SingleProducts extends React.Component {
  render() {
    const { info } = this.props;
    const { summary } = info || {};
    return (
      <div className="product">
        <img src={product} />
        <div className="productSummary">{summary}</div>
      </div>
    );
  }
}

export default SingleProducts;