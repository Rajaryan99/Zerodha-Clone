import React from 'react'

function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
               <h1 className='mt-5 mb-4 fs-2'>Open a Zerodha account</h1>
               <p className='mb-5 fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <a href="http://localhost:3001/signup"> <button className='btn btn-primary p-2 fs-5 ' style={{width:'20%', margin: "0 auto"}}>Sign up for free</button></a> 
            </div>

        </div>
     );
}

export default OpenAccount;