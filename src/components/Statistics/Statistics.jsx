import { Text } from './Statistics.styled';

export function Statistics(props) {
    return (
    <>
    <Text>Good: {props.good}</Text>
    <Text>Neutral: {props.neutral}</Text>
    <Text>Bad: {props.bad}</Text>
    <Text>Total: {props.total}</Text>
    <Text>Positive feedback: {props.positivePercentage}%</Text>
    </>
    )
}