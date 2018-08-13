import React from "react"

const Name = (props) => (
    <div style={{
        textAlign: 'center',
        paddingTop: '8.5rem',
        color: 'white',
        fontSize: "3rem",
        paddingBottom: "1rem"
    }}>
        {props.name}
    </div>
)

export default Name
