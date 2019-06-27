import React from 'react';
import PropTypes from 'prop-types';

//import { Section, Columns, Column } from 'bloomer';

const MenuList = props => {
    const { menuList } = props;
    console.log(menuList);
    return (
        <ul>
        {menuList.map((item) => 
            <li><b>Item: </b>{item}</li>
        )}
        </ul>
    );
}

export default MenuList;

MenuList.propTypes = {
    restaurants: PropTypes.object
}