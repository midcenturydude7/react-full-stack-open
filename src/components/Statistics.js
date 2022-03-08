import React from "react";

const Statistics = ({ good, neutral, bad }) => {
    const [total, setTotal] = React.useState(0)
    const sumNums = good + neutral + bad
    setTotal(total + sumNums)

    return (
        <>
            <span>All: {total}</span><br />
            <span>Average: </span><br />
            <span>Positive: </span><br />
        </>
    )
}

export default Statistics;