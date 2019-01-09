import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

//主页路由
const renderMenuItem = item => ( // item.route 菜单单独跳转的路由
  <span key={item.key} className="menu">
    <Link to={(item.route || item.key) + (item.query || '')}>
      {item.title}
    </Link>
  </span>
);

const renderSubMenu = item => (
  <div
    key={item.key}
    title={
      <span>
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.subs.map(item => renderMenuItem(item))}
  </div>
);

export default ({ menus, ...props }) => (
  <div {...props} className="container">
    {menus && menus.map(item =>
      item.subs ? renderSubMenu(item) : renderMenuItem(item)
    )}
  </div>
);