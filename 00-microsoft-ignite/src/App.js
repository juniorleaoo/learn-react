import './App.css';
import Title from "./Title";
import IngredientList from "./IngredientList";
import StepRecipeList from "./StepRecipeList";
import {useEffect, useState} from "react";

const initialRecipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        {name: '3 potatoes, cut into 1/2" pieces', prepared: false},
        {name: '4 Tbsp butter', prepared: false},
        {name: '1/8 cup heavy cream', prepared: true},
        {name: 'Salt', prepared: false},
        {name: 'Pepper', prepared: false},
    ],
    steps: [
        {name: 'Adicione as batatas cortadas a uma panela com água e sal.', finish: false},
        {name: 'Leve a panela para ferver.', finish: false},
        {name: 'Ferva as batatas até ficarem macias, por cerca de 15 a 20 minutos.', finish: false},
        {name: 'Coe as batatas.', finish: false},
        {name: 'Coloque-as novamente na panela.', finish: false},
        {name: 'Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto.', finish: false},
        {name: 'Amasse as batatas.', finish: false},
        {name: 'Tempere novamente e adicione a manteiga e o creme de leite conforme desejado.', finish: false},
    ]
};

function App() {

    const [recipe, setRecipe] = useState(initialRecipe);
    const [ingredientsPrepared, setIngredientsPrepared] = useState(false);
    const [stepsFinish, setStepsFinish] = useState(false);

    useEffect(() => {
        setIngredientsPrepared(recipe.ingredients.every(i => i.prepared));
        setStepsFinish(recipe.steps.every(i => i.finish));
    }, [recipe]);

    function ingredientClick(index) {
        const updateRecipe = {...recipe};
        updateRecipe.ingredients[index].prepared = !updateRecipe.ingredients[index].prepared;
        setRecipe(updateRecipe);
    }

    function stepClick(index) {
        const updateRecipe = {...recipe};
        updateRecipe.steps[index].finish = !updateRecipe.steps[index].finish;
        setRecipe(updateRecipe);
    }

    return (
        <article>
            <Title title={recipe.title} feedback={recipe.feedback}/>

            <IngredientList ingredients={recipe.ingredients} onClick={ingredientClick}/>

            <StepRecipeList steps={recipe.steps} onClick={stepClick}/>

            { ingredientsPrepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
            { stepsFinish ? <h2>Steps finished!</h2> : ''}
        </article>
    );
}

export default App;
