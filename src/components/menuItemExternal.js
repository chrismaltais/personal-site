import React from "react"
import Link from 'gatsby-link'

const MenuItemExternal = (props) => (
    <li style={{ paddingTop: '0.5rem'}}>
        <a href={props.linkTo} style={{ textDecoration: 'none', color: 'white', fontSize: '1rem'}}>{props.linkText}</a>
    </li>
)

export default MenuItemExternal
