import React from "react";

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return (
            <div>
                Press those buttons to get things started!
            </div>
        )
    }
    return (
        <div>
            Button press history: {allClicks.join(" ")}
        </div>
    )
}

export default History;
