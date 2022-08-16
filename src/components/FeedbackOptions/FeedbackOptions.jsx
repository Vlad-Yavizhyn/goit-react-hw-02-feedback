export function FeedbackOptions(props) {
    return props.options.map((option) => {
       return <button key={option} name={option} onClick={props.onLeaveFeedback}>
        {option}
        </button>
    });
}
