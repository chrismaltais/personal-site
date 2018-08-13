import React from 'react'
import Link from 'gatsby-link'
import Name from '../components/name'
import Occupation from '../components/occupation'
import MenuItemInternal from '../components/menuItemInternal'
import MenuItemExternal from '../components/menuItemExternal'
import '../layouts/index.css'

const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600}}>
    <Name name="chris maltais" />
    <Occupation jobTitle=" software engineer" />
    <ul style={{ textAlign: 'center', listStyleType: "none", paddingTop: '3.5rem', marginLeft: 'none'}}>
        <MenuItemInternal linkTo="/building" linkText="projects" />
        <MenuItemInternal linkTo="/building" linkText="work" />
        <MenuItemExternal linkTo="https://www.linkedin.com/pulse/why-i-chose-stop-smell-roses-importance-seeing-more-chris-maltais/" linkText="my story" />
        <MenuItemInternal linkTo="/building" linkText="read up" />
    </ul>
  </div>
)

export default IndexPage
