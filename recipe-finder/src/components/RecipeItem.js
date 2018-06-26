import React, { Component } from 'react';

class RecipeItem extends Component {
    render() {
        let { recipe } = this.props;
        return (
            <div>
                <a href={recipe.href}>
                    <h4>{recipe.title}</h4>
                </a>
                <p>{recipe.ingredients}</p>
                <img src={recipe.thumbnail} alt={recipe.title} />
            </div>
        );
    }
}

export default RecipeItem;
