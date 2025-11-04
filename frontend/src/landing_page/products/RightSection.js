import React from 'react'

function RightSection({imageURL, productTitle, productDescription, learnMore}) {
    return ( 
       <div className='container mt-5 mb-5'>
            <div className='row mt-5'>
                <div className='col-5 mt-5'>
                    <h1 className=' mb-4 fs-2' style={{marginTop:"100px"}}>{productTitle}</h1>
                    <p className='mb-4 ' style={{fontSize:'19px', lineHeight:'2rem'}}>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={learnMore} className=' fs-5' >Learn more <i class="fa-solid fa-arrow-right" style={{fontSize:"15px"}}></i></a>
                    </div>
                   
                </div>
                <div className='col-1'></div>
                <div className='col-6 '>
                    <img src={imageURL} alt="Product Image" className=''  />
                </div>
            </div>
        </div>
     );
}

export default RightSection;