import React from 'react'
import LinkedIn from '../icons/linkedin-brands.svg'
import Mail from '../icons/envelope-square-solid.svg'
import FileCV from '../icons/file-alt-solid.svg'
import GitHub from '../icons/github-square-brands.svg'

const Footer = () => (
    <footer style={{
        backgroundColor: 'black',
        textAlign: 'center'
    }}>
        <ul style={{ listStyle: 'none'}}>
            <li style={{ display: 'inline', marginRight: '1rem' }}><a href='mailto:contact@chrismaltais.com'><img style={{height: '2rem'}} src={Mail} alt="test"/></a></li>
            <li style={{ display: 'inline', marginRight: '1rem' }}><a href='http://bit.ly/chrismaltais2018'><img style={{ position: 'relative', top: '-2px', height: '1.75rem'}} src={FileCV} alt="test"/></a></li>
            <li style={{ display: 'inline', marginRight: '1rem' }}><a href='https://www.linkedin.com/in/chrismaltais/'><img style={{height: '2rem'}} src={LinkedIn} alt="test"/></a></li>
            <li style={{ display: 'inline', marginRight: '1rem' }}><a href='https://github.com/chrismaltais'><img style={{height: '2rem'}} src={GitHub} alt="test"/></a></li>
        </ul>
    </footer>
)

export default Footer
