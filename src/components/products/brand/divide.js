import React from 'react';
import style from './style.scss';

class Divide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: ['brand1', 'brand2', 'brand3']
    }
  }
  render() {
    const { brands } = this.state;
    const brandList = brands && brands.length > 0 && brands.map((item, i) => {
      return <span key={i}>{item}</span>
    });
    console.log(style);
    return (
      <div className="productBrand">
        <span>brand:</span>
        {brandList}
      </div>
    )
  }
}

export default Divide;