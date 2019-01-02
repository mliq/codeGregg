import React from 'react'
import twitter from '../images/twitter.svg'
import spotify from '../images/spotify.svg'
import facebook from '../images/facebook.svg'
import codepen from '../images/codepen.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin2.svg'

const Footer = () => (
  // Social Icons
  <div style={{
    margin: '0 auto',
    padding: '10px 0'
  }}>
    <a href="#" style={{margin: '0 10px'}}><img src={codepen} alt="codepen" /></a>
    <a href="#" style={{margin: '0 10px'}}><img src={github} alt="github" /></a>
    <a href="#" style={{margin: '0 10px'}}><img src={linkedin} alt="linkedin" /></a>
    <a href="#" style={{margin: '0 10px'}}><img src={spotify} alt="spotify" /></a>
    <a href="#" style={{margin: '0 10px'}}><img src={twitter} alt="twitter" /></a>
    <a href="#" style={{margin: '0 10px'}}><img src={facebook} alt="facebook" /></a>
  </div>
)

export default Footer
