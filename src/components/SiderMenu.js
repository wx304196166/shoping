import React from 'react';
import { Link } from 'react-router-dom';

const renderMenuItem = item => ( // item.route 菜单单独跳转的路由
    <li key={item.key} >
        <Link to={(item.route || item.key) + (item.query || '')}>   
            <span className="nav-text">{item.title}</span>
        </Link>
    </li>
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
    <ul {...props}>
        {menus && menus.map(item => 
            item.subs ? renderSubMenu(item) : renderMenuItem(item)
        )}
    </ul>
);