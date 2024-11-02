import React from "react"

interface blockValue {
    value?: string;
    onClick?: () => void;
}
const Block: React.FC<blockValue> = (props) => {
    return (
        <div className="block" onClick={props.onClick}>
            <p>{props.value}</p>
        </div>
    )
}

export default Block;