/**
 * Created by katniss on 2017/5/3.
 */
import React from 'react';
import product from '../../style/imgs/product.png';
import './style.scss';

class SingleProducts extends React.Component {
  render() {
    const { info } = this.props;
    const { summary, title } = info || {};
    return (
      <div className="product">
        <img src={product} alt="" />
        <div className="productSummary">
          <h3>{title}</h3>
          {summary}
        </div>
      </div>
    );
  }
}

export default SingleProducts;