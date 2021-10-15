import './IngredientList.css';

function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ingredient.prepared ? 'prepared' : ''} onClick={() => props.onClick(index)}>
                {ingredient.name}
            </li>
        )
    });

    return (
        <ul>{ingredientListItems}</ul>
    )
}

export default IngredientList;