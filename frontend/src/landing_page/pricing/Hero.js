import React from 'react'

function Hero() {
    return ( 
        <div className='container ' style={{marginTop:'9rem'}}>
            <div className='row text-center mb-5 border-bottom'>
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 mb-5'>Free equety investment and flat  &#8377;20 traday and F&0 trades</h3>
            </div>
            <div className='row' style={{marginTop:'9rem'}}>
                <div className='col-4 text-center'>
                    <img src="media/images/pricing0.svg" alt="" style={{width:'70%'}} />
                    <h1 className='text-muted fs-2' >Free equity delivery</h1>
                    <p className='fs-5 text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src="media/images/other-trades20.svg" alt="" style={{width:'70%'}}/>
                    <h1 className='text-muted fs-2' >Intraday and F&O trades</h1>
                    <p className='fs-5 text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src="media/images/pricing0.svg" alt="" style={{width:'70%'}}/>
                    <h1 className='text-muted fs-2' >Free direct MF</h1>
                    <p className='fs-5 text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
                 
            </div>
            
        </div>
     );
}

export default Hero;