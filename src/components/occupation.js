import React from "react"
import CodeBrackets from '../icons/code-solid.svg'
//import Typed from 'typed.js';

const Occupation = (props) => (

    <div style={{
        textAlign: 'center',
        lineHeight: '30px',
        height: '30px',
        color: 'grey',
        fontSize: "2rem",
        paddingBottom: '1rem'
    }}>
        <p><img src={CodeBrackets} style={{height: '2rem', paddingTop: '10px'}} /> {props.jobTitle}  </p>
    </div>
)

// let typed = new Typed('#typed', {
//     stringsElement: '#typed-strings'
// });
// <div id='typed-strings'>
//     <p>{props.jobTitle1}</p>
//     //<p>{props.jobTitle2}</p>
//     //<p>{props.jobTitle3}</p>
// </div>

export default Occupation
