import React from 'react';
import PropTypes from 'prop-types';

//import { Section, Columns, Column } from 'bloomer';

const RestTypeList = props => {
    const { cuisineList } = props;
    console.log(cuisineList);
    return (
        <ul>
        {Object.keys(cuisineList).map((rest) => 
            <li><b>Restaurant: </b>{rest}</li>
        )}
        </ul>
    );
}

export default RestTypeList;

RestTypeList.propTypes = {
    restaurants: PropTypes.object
}