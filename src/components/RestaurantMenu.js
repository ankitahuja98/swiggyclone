import { useEffect, useState } from "react";
import { Rest_Menu_img } from '../utils/constant';
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [RestData, SetRestData] = useState([]);

    const [RestMenu, SetRestMenu] = useState([]);

    const { resid } = useParams();

    useEffect(() => {
        fetchRestMenuApi();
    }, [])

    const fetchRestMenuApi = async () => {
        const fetchapi = await fetch("https://corsproxy.org/?" + encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6389315&lng=77.08668109999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`));

        const data = await fetchapi.json();

        SetRestData(data.data.cards[2].card.card.info);

        SetRestMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

        // console.log(data.data)

    }

    return (
        <>
            {!RestData ? <h1>Loading...</h1> :
                <div className="RestMenuDiv">
                    <div className="restInro">
                        <h1>{RestData.name}</h1>
                        <ul>
                            <li>{RestData.areaName}, {RestData.city}</li>
                            <li>{RestData.avgRatingString} Rating</li>
                            <li>{RestData.costForTwoMessage}</li>
                        </ul>
                    </div>


                    <div className="RestMenu">
                        <h2 className="Recommended">Recommended</h2>

                        {RestMenu.map((value) => {
                            return (
                                <div className="MenuItem d-flex" key={value.card.info.id}>
                                    <div className="ItemDetails">
                                        <h3>{value.card.info.name}</h3>
                                        <h4>&#8377; {value.card.info.defaultPrice / 100 || value.card.info.price / 100}</h4>
                                        <p> {value.card.info.description}</p>
                                        <button className="btn btn-outline-primary">Add to Cart</button>
                                    </div>

                                    <div className="d-flex flex-column img_">
                                        <img src={Rest_Menu_img + value.card.info.imageId} alt='err' />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            }
        </>
    )
}

export default RestaurantMenu;