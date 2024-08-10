import React from 'react'

const Nav = () => {
    let scrollHome = () => {
        let targetDiv = document.querySelector('#targetDiv');
          targetDiv.scrollIntoView({ behavior: 'smooth' })
      }
    let scrollskills = () => {
        let targetDiv1 = document.querySelector('#targetDiv1');
          targetDiv1.scrollIntoView({ behavior: 'smooth' })
      }
      let scrollprojects = () => {
        let targetDiv2 = document.querySelector('#targetDiv2'); 
          targetDiv2.scrollIntoView({ behavior: 'smooth' })
      }
      let scrollcontact = () => {
        let targetDiv4 = document.querySelector('#targetDiv3'); 
          targetDiv4.scrollIntoView({ behavior: 'smooth' })
      }
  return (
    <header>
    <h1 id='logo' onClick={scrollHome} style={{cursor:'pointer'}}>Nikhil Kumar</h1>
    <nav>
        <ul>
            <span onClick={scrollskills}>Skills</span>
            <span onClick={scrollprojects}>Projects</span>
            <span onClick={scrollcontact}>Contact</span>
        </ul>
    </nav>
    </header>
  )
}

export default Nav