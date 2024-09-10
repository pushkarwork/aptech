import React from 'react'
import "../../assets/css/Image.css"
const Pic = ({ pic }) => {
    return (
        <div className='pic'>
           <img src={pic}/>
        </div>
    )
}

export default Pic
