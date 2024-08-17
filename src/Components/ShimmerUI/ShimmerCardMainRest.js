import React from 'react'

const ShimmerCardMainRest = () => {

    const list = [
        {
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }, {
            id: 7
        }, {
            id: 8
        }, {
            id: 9
        }, {
            id: 10
        }, {
            id: 11
        }, {
            id: 12
        }, {
            id: 13
        }, {
            id: 14
        }, {
            id: 15
        }
    ]

    return (

        <div className='flex flex-wrap justify-center sm:justify-between'>
            {
                list.map((val,ind) => {
                    return (
                        <div key={ind}>
                            <div className='ShimmerCard mr-0 sm:mr-5 mt-4 mb-5 cursor-pointer w-56 h-64 rounded-2xl' style={{ backgroundColor: "#d8d9db" }}>

                            </div>
                        </div>
                    )
                })
            }
        </div>



    )
}

export default ShimmerCardMainRest
