import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1> Largest Broker in India.</h1>
                    <p>2+ million Zerodha Clients contributing over 15% of all retail volume in India daily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-6  p-5 '> 
                        <ul>
                            <li><p>Future & Options</p></li>
                            <li><p>Commodity Derivatives</p></li>
                            <li><p>Currency Derivatives</p></li>
                        </ul>
                        </div>
                        <div className='col-6 p-5'>
                        <ul>
                            <li><p>Stocks & IPO</p></li>
                            <li><p>Direct Mutual Funds</p></li>
                            <li><p>Bonds & Govt. Securities</p></li>
                         </ul>
                         </div>
                    </div>
                    <img  src='/media/presslogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;