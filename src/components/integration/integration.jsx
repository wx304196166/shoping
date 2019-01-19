/**
 * Created by katniss on 2019/1/13.
 */
import React from 'react';
import Related from '../common/releated/related';
import './integration.scss';

class Integration extends React.Component {
  render() {
    return (
      <ul className="page-container clearfix">
        <li className="show-box clearfix">
          <ul className="show clearfix">
            <li>Led Colourful HD Display</li>
            <li></li>
            <li>Specifications:  <span>200*300</span></li>
            <li>
            Curabitur auctor tristique lobortis. Quisque bibendum, ipsum in feugiat pharetra, odio libero malesuada turpis, tempus fermentum augue est sit amet magna. Vestibulum bibendum lectus non mauris porta, sed blandit purus scelerisque. Sed consequat mollis ornare. Sed laoreet id dolor vitae facilisis. Mauris varius orci sed turpis commodo mattis.
            </li>
          </ul>
          <div className="blank"></div>
          <ul className="operate clearfix">
            <li></li>
            <li></li>
          </ul>
          <div className="blank"></div>
          <div className="related"><Related /></div>
        </li>
        <li className="parms-table"></li>
        <li className="submit"></li>
      </ul>
    )
  }
}

export default Integration;