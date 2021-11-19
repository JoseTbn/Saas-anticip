import React from 'react'
import './Subhero.css'
import hometext from  '../../assets/hometext.png'


export default function Subhero() {
    return (
        <>
        <div className="subhero_conatainer">
            <div className='subhero_conatainer_content'> 
           <div className="subhero_title"> 
           <h1>
                So,why to choose anticip?
            </h1> 
            </div>
           <div className="block">  
          <blockquote >
           <p> The first reason is probably because we’re external to your organisation and that we can </p>
           <p> detect a good or a bad profile and understand your needs and culture to optimize your </p>
           <p> chance to do a profitable match in the long term.</p>
            </blockquote> 
            <h3>Also beacause:</h3>
            </div>
            </div>
            <div className="subimg">
                <div className="imgarea"> 
                <img src={hometext} alt="" /> 
                </div>
                <div className="subsvg">

                </div>
            </div>

          </div>
          </>
    )
}
