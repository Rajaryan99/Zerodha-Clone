import React from 'react'

import Hero from './Hero';
import Kite from './Kite';
import Console from './Console';
import Coin from './Coin'
import KiteConnectAPI from './KIteConnectAPI';
import Universe from './Universe';


function ProductPage() {
    return ( 
        <>
            
            <Hero/>
            <Kite/>
            <Console/>
            <Coin/>
            <KiteConnectAPI/>
            <Universe/>
            
        </>
     );
}

export default ProductPage;