import React, { useState, useEffect } from 'react';
// import { Resturants_Api } from '../utils/constant';
import RestCard from './RestCard';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'

const Restaurants = () => {


  const [Restaurants, SetRestaurants] = useState();

  const [filteredRest, setFilteredRest] = useState();

  const [search, SetSearch] = useState("")

  const [RatingBtnBgColor, SetRatingBtnBgColor] = useState({
    bgcolor: "",
    color: "",
  })


  useEffect(() => {
    fetchResturantsApi();

  }, [])

  const fetchResturantsApi = async () => {

    const data = await fetch("https://corsproxy.org/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6389315&lng=77.08668109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));

    const fetch_data = await data.json();

    SetRestaurants(fetch_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRest(fetch_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // console.log(fetch_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  // console.log(Restaurants)

  const Topratedfunc = () => {
    const Toprated = Restaurants.filter((value) =>
      value.info.avgRating > 4)
    if (RatingBtnBgColor.bgcolor === "") {
      SetRatingBtnBgColor({
        bgcolor: "#0d6efd",
        color: "White",
      })
    } else {
      SetRatingBtnBgColor({
        bgcolor: "",
        color: "",
      })
    }

    SetRestaurants(Toprated)
  }

  const onlinestatus = useOnlineStatus();

  if (!onlinestatus) {
    return <h1>You are Offline, Please check your Internet connection</h1>
  }


  return (
    <>
      {!Restaurants ? <h1>Loading.....</h1> :
        <div className='RestaurantsDiv'>

          <div className='filter-btn w-50' >

            <button className='filterbtn m-3' style={{ backgroundColor: RatingBtnBgColor.bgcolor, color: RatingBtnBgColor.color }} onClick={Topratedfunc}>Top Rated Restaurants</button>

            <input className='filterInput' type='text' placeholder='Search the Restaurant' value={search}
              onChange={(e) => {
                SetSearch(e.target.value)
              }} />

            <button className='searchbtn' onClick={() => {

              const SearchedRest = Restaurants.filter((value) =>
                value.info.name.toLowerCase().includes(search.toLowerCase())
              )
              setFilteredRest(SearchedRest)

            }} >Search</button>
          </div>



          <div className='restaurants d-flex'>
            <div className='container'>
              <div className='row '>
                {filteredRest.map((value) => {
                  return (<Link to={`/restaurantMenu/${value.info.id}`} className="w-25 rest_" key={value.info.id}>
                    <RestCard Api_data={value} /></Link>)
                })}
              </div>
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default Restaurants
