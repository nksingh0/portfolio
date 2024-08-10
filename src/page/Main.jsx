import React from 'react'
import x from '../assests/nks1.jpg'
import a from '../assests/github-142-svgrepo-com.svg'
import b from '../assests/linkedin-svgrepo-com.svg'
import c from '../assests/insta-svgrepo-com.svg'

const Main = () => {
  return (
    <>
        <section className='main' id='targetDiv'>
            <div id='main1'>
                <div className='main-text'>
                    <h1 style={{fontSize:'50px'}}>Nikhil Kumar</h1>
                    <p style={{color:'blue',fontSize:'30px'}}>Frontend Developer</p><br/>
                    <span><a href='https://www.linkedin.com/in/nksingh10/' target='/blank'><img src={a} alt='nn' style={{width:'35px'}}/></a> <a href='https://github.com/nksingh0' target='/blank'><img src={b} alt='nn' style={{width:'35px'}}/></a> <a href='https://www.instagram.com/_nksingh_/' target='/blank'><img src={c} alt='nn' style={{width:'35px'}}/></a></span>
                    <br/><p style={{fontSize:'19px'}}>I am a passionate and dedicated<br/> front-end developer with a proven<br/> track record of building high-quality<br/> user interfaces.</p>
                </div>
                <div className='main-img'>
                    <img src={x} alt='Nikhil' id='img'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main