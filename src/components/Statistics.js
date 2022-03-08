import React from "react";

const Statistics = ({total, average, positive}) => {

    if (total === 0) {
        return (
            <>
                <h2>No Feedback Given</h2>
            </>
        )
    } else {
        return (
            <>
                <span>All: {total}</span><br />
                <span>Average: {average}</span><br />
                <span>Positive: {positive}%</span><br />
            </>
        )
    }
}

export default Statistics;