import React from 'react'


function Team() {
    return ( 
         <div className='container mt-5 mb-5'>
            <div className='row'>
                <h1 className='fs-3 mt-5 text-center '>People</h1>
               

            </div>
            <div className='row  mb-5'>
                <div className='col mt-5 Founder' >
                 <img src="media/images/raj.jpg" alt="" className=''/>
                  <p className='mt-3 fw-bold'>Raj Aryan</p>
                <p>Founder, CEO</p>
                </div>
                <div className='col mt-5'>
                    <p className='aboutPara mt-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='aboutPara'> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='aboutPara'>Playing basketball is his zen.</p>
                    <p className='aboutPara'>Connect on <a href="https://github.com/Rajaryan99"> Github</a> / <a href="https://x.com/Rajarya50547886">Twitter</a>  / <a href="https://www.linkedin.com/in/raj-aryan-singh-897a11321/"> LinkedIn</a></p>
                </div>

            </div>
        </div>
     );
}

export default Team;