import React from 'react'

function Footer(){
    const copyright = String.fromCodePoint(0x00A9);
    const date = new Date().getFullYear();

    return (
        <div className='Footer-part'>
            <hr></hr>
            <span className='copyright'>
                Copyright {copyright} {date}. All rights reserved.
            </span>
            
        </div>
    )

}


export default Footer;