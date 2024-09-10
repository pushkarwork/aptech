import React, { useEffect } from 'react'
import Heading from '../Layout/Heading'
import Pic from '../Layout/Pic'
import Desc from '../Layout/Desc'
import Detail from '../Layout/Detail'
import { useParams } from 'react-router-dom'
import "../../assets/css/ServDetails.css"
import services from '../../data/ServiceData'

const ServDetails = () => {
    const { id } = useParams();
    const service = services[id - 1];
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);


    // console.log(service)
    return (
        <div className='MainCont'>
            <Heading heading={service.title} />
            <div className='pic-desc'>
                <Desc description={service.description} />
                <Pic pic={service.image} />
            </div>

            <Detail detail={service.details} />
        </div>
    )
}

export default ServDetails
