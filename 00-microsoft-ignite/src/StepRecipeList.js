import './StepRecipeList.css';

function StepRecipeList(props) {
    return (
        <ol>{props.steps.map((step, index) => {
            return (
                <li key={index} className={step.finish ? 'finish' : ''} onClick={() => props.onClick(index)}>
                    {step.name}
                </li>
            )
        })}</ol>
    )
}

export default StepRecipeList;