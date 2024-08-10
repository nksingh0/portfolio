import React from 'react'
import x from '../assests/spotify_logo_PNG3.png'

const Project = () => {
  return (
    <>
        <section className='main' id='targetDiv2'>
            <div id='main1'>
                <div className='main-text'>
                    <h1>Acadmic Projects</h1><br/>
                    <img src={x} alt='nn' style={{width:'250px'}}/><br/>
                    <form action=''>
                        <button type='submit' style={{color:'red',fontSize:'20px',border:'none',cursor:'pointer'}}>Spotify Music Analysis</button>
                    </form>
                </div>
                <div className='main-text'>
                    <h1>Individual Projects</h1><br/>
                    <p style={{color:'red'}}><u></u></p>
                    <p></p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Project