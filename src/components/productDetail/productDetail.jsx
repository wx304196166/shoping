import React from 'react';
import Related from '../common/releated/related';
import './productDetail.scss';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="page-container">
        <ul className="intro clearfix">
          <li className="show-box">
            <div>

            </div>
            <ul className="spec-list">
              <li></li>
              <li>
                {/* 小图列表 */}
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li></li>
            </ul>
          </li>
          <li className="blank"></li>
          <li className="describe-box">
            <div className="title">
              Led Colourful HD Display
              <i className="collect"></i>
            </div>
            <ul className="specifications clearfix">
              <li>Specifications:</li>
              <li>

              </li>
            </ul>
            <p className="describe">
              Curabitur auctor tristique lobortis. Quisque bibendum, ipsum in feugiat pharetra, odio libero malesuada turpis, tempus fermentum augue est sit amet magna. Vestibulum bibendum lectus non mauris porta, sed blandit purus scelerisque. Sed consequat mollis ornare. Sed laoreet id dolor vitae facilisis. Mauris varius orci sed turpis commodo mattis.
            </p>

          </li>
        </ul>
        <ul className="detail-box clearfix">
          <li className="related">
            <Related />
          </li>
          <li className="blank">&emsp;</li>
          <li className="detail">
            <div className="tab">Commodity introduction</div>
            <div className="content">
              Curabitur auctor tristique lobortis. Quisque bibendum, ipsum in feugiat pharetra, odio libero malesuada turpis, tempus fermentum augue est sit amet magna. Vestibulum bibendum lectus non mauris porta, sed blandit purus scelerisque. Sed consequat mollis ornare. Sed laoreet id dolor vitae facilisis. Mauris varius orci sed turpis commodo mattis. Cras vel nibh scelerisque urna tincidunt vestibulum accumsan pharetra ex. Proin ullamcorper eros non justo tincidunt lobortis. Ut sapien nisi, bibendum tempor efficitur ultricies, pellentesque interdum diam. Aliquam commodo felis eu urna consectetur, ut semper diam tempor. Etiam eu maximus sapien, a tristique tortor.
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default ProductDetail;