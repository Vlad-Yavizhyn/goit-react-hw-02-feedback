import {Button} from './FeedbackOptions.styled'

export function FeedbackOptions(props) {
    return props.options.map((option) => {
       return <Button key={option} name={option} onClick={props.onLeaveFeedback}>
        {option}
        </Button>
    });
}
