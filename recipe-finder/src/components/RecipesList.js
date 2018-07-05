import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipesList extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
            {
                this.props.recipes.map((recipe, index) => {
                    return (
                        <RecipeItem
                          key={index}
                          recipe={recipe}
                          favoriteButton={true}
                        />
                    );
                })
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps, null)(RecipesList);
