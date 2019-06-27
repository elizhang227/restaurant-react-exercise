import React from 'react';
import PropTypes from 'prop-types';

//import { Section, Columns, Column } from 'bloomer';
import RestTypeList from './restTypeList';
import MenuList from './menuList';


const RestList = props => {
    const { restaurants } = props;
    return (
        <div>
            {Object.keys(restaurants).map((cuisine) =>
            <ul>
                <li>{cuisine}</li>
                <RestTypeList cuisineList={restaurants[cuisine]}/>
                
                {Object.keys(restaurants[cuisine]).map((menu) =>
                    <MenuList menuList={restaurants[cuisine][menu]} />
                )}
            </ul>
            )}
        </div>
    )
}

export default RestList;

RestList.propTypes = {
    restaurants: PropTypes.object
}