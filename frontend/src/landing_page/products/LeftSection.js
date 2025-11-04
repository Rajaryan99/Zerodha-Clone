import React from 'react'

function LeftSection({imageURL, productTitle, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container '>
            <div className='row mt-5'>
                <div className='col-6 mt-5'>
                    <img src={imageURL} alt="Product Image"  />
                </div>
                <div className='col-1'></div>
                <div className='col-5 mt-5'>
                    <h1 className='mt-5 mb-4 fs-2'>{productTitle}</h1>
                    <p className='mb-4 ' style={{fontSize:'19px', lineHeight:'2rem'}}>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={tryDemo} className=' fs-5'>Try demo <i class="fa-solid fa-arrow-right" style={{fontSize:"15px"}}></i> </a>
                        <a href={learnMore} className='ms-4 fs-5' >Learn more <i class="fa-solid fa-arrow-right" style={{fontSize:"15px"}}></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" style={{width:"30%"}} /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" className='ms-4' style={{width:"30%"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;