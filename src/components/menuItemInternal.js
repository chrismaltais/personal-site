import React from "react"
import Link from 'gatsby-link'

const MenuItemInternal = (props) => (
    <li style={{ paddingTop: '0.5rem'}}>
        <Link to={props.linkTo} style={{ textDecoration: 'none', color: 'white', fontSize: '1rem'}}>{props.linkText}</Link>
    </li>
)

export default MenuItemInternal
