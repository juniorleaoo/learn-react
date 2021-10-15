import './Title.css';

function Title(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'blue'}>
                {props.feedback.rating} from {props.feedback.reviews}
            </h3>
        </section>
    )
}

export default Title;