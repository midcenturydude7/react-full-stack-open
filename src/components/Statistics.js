import React from "react";

const Statistics = ({total, average, positive}) => {

    return (
        <>
            <span>All: {total}</span><br />
            <span>Average: {average}</span><br />
            <span>Positive: {positive}%</span><br />
        </>
    )
}

export default Statistics;