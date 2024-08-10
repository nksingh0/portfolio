import React from 'react'
import x from '../assests/html-5-svgrepo-com.svg'
import y from '../assests/css-3-svgrepo-com.svg'
import z from '../assests/javascript-svgrepo-com.svg'
import a from '../assests/reactjs-svgrepo-com.svg'
import b from '../assests/sql-svgrepo-com.svg'
import c from '../assests/python-svgrepo-com.svg'

const Skills = () => {
  return (
    <>
        <section className='main' id='targetDiv1'>
            <div id='main1'>
                <div className='main-text'>
                    <img src={x} alt='nn' className='skillimg'/>
                    <h1>HTML</h1>
                </div>
                <div className='main-text'>
                    <img src={y} alt='nn' className='skillimg'/>
                    <h1>CSS</h1>
                </div>
                <div className='main-text'>
                    <img src={z} alt='nn' className='skillimg'/>
                    <h1>JAVASCRIPT</h1>
                </div>
                <div className='main-text'>
                    <img src={a} alt='nn' className='skillimg'/>
                    <h1>REACTJS</h1>
                </div>
                <div className='main-text'>
                    <img src={b} alt='nn' className='skillimg'/>
                    <h1>SQL</h1>
                </div>
                <div className='main-text'>
                    <img src={c} alt='nn' className='skillimg'/>
                    <h1>PYTHON</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills