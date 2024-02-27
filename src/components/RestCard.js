import React from 'react';
import { Rest_img_url } from '../utils/constant';


const RestCard = (props) => {
    const { Api_data } = props


    const { name, costForTwo, cuisines, avgRating, areaName, cloudinaryImageId } = Api_data.info

    return (

        <div className='col-12 col-md-3 col-lg-3 card_'>
            <div className='card_img'>
                <img src={Rest_img_url + cloudinaryImageId} alt="food" />
            </div>
            <div className='restL'>
                <h2 className='mb-3 restLi' style={{ color: "#000099", fontWeight: "600" }}>{name}</h2>
                <h5 className='d-flex restLi'>location: {areaName}</h5>
                <h5 className='d-flex restLi'>{costForTwo}</h5>
                <h5 className='d-flex Cuisines restLi'>Cuisines: {cuisines.join(", ")}</h5>
                <h5 className='d-flex restLi'>{avgRating} Rating</h5>

            </div>
        </div>

    )
}

export default RestCard


export const withLabelpromoted = () => {
    return () => {
        return (
            <div>
                <label>
                    Promoted
                </label>
                <RestCard/>
            </div>
        )
    }
} 
