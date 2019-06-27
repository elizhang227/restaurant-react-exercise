import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import { Section, Columns, Column } from 'bloomer';

class RestTypeList extends Component {
    state = {
        menu: []
    }
    
    handleClick = async (e, restaurant) => {
        e.preventDefault();

        await this.setState({
            menu: this.props.restaurants[restaurant]
        })
    }

    render() {
        const restList = this.props.restaurants
        const menu = this.state.menu;
        return (
            <div>
                {Object.keys(restList).map((rest) => 
                    <button onClick={(e) => this.handleClick(e, rest)} key={rest}>
                        <b>Restaurant: </b>{rest}
                    </button>
                )}
                <ul>
                    {menu.map((food,ind) => 
                        <li key={food+ind}>{food}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default RestTypeList;

RestTypeList.propTypes = {
    restaurants: PropTypes.object
}