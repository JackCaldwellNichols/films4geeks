import React from 'react'
import '../../img/spiderman.png'
import '../../img/super.png'
import '../../img/superw.png'


export const Starring = () => {
  return (
    <div className='container text-center mt-5'>
        <div className='d-flex justify-content-around flex-wrap'>
            <div>
                <div className='card mt-2' style={{width: '19rem', height: '19rem', background: 'radial-gradient(#e66465, #9198e5)'}}>
                    <div style={{marginTop: '30px'}}>
                        <img src='spiderman.png' style={{height: '13rem', objectFit: 'contain'}}/>   
                    </div>
                </div>
                <div className='mt-3'>
                    <h6>David Galisteo Pujol</h6>
                    <h6>Co-Founder & CEO, Films4Geeks</h6>
                    <h6>Lead developer</h6>
                    <h6>Linkedin: </h6>
                </div>
            </div>
            <div>
                <div className='card mt-2' style={{width: '19rem', height: '19rem', background: 'radial-gradient(#e66465, #9198e5)'}}>
                    <div style={{marginTop:'30px'}}>
                        <img src='super.png' style={{height: '13rem', objectFit: 'contain'}}/>   
                    </div>
                </div>
                <div className='mt-2'>
                    <h6>Jack Caldwell-Nichols</h6>
                    <h6>Co-Founder & CEO, Films4Geeks</h6>
                    <h6>Lead developer</h6>
                    <h6>Linkedin: </h6>
                </div>
            </div>
            <div>
                <div className='card mt-2' style={{width: '19rem', height: '19rem', background: 'radial-gradient(#e66465, #9198e5)', marginTop:'80px'}}>
                     <div style={{marginTop:'30px'}}>
                        <img src='superw.png' style={{height: '13rem', objectFit: 'contain'}}/>   
                    </div>
                </div>
                <div className='mt-2'>
                    <h6>Mireya De La Corte Ríos</h6>
                    <h6>Co-Founder & CEO, Films4Geeks</h6>
                    <h6>Lead developer</h6>
                    <h6>Linkedin: </h6>
                </div>
            </div>
           
               
        </div>    
    </div>
  )
}

