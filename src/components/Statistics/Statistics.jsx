export function Statistics(props) {
    return (
    <>
    <p>Good:{props.good}</p>
    <p>Neutral:{props.neutral}</p>
    <p>Bad:{props.bad}</p>
    <p>Total:{props.total}</p>
    <p>Positive feedback:{props.positivePercentage}%</p>
    </>
    )
}