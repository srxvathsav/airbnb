import React, { useState } from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { Button } from "@material-ui/core";
import { useEffect } from 'react';

function SearchPage() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('db.json', {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((myData) => {
            console.log(myData.nearby);
            setData(myData.nearby)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <div className='nearby'>
                {
                    data && data.length > 0 && data.map((val) =>
                    (
                        <SearchResult
                            img={val.img}
                            location={val.location}
                            title={val.title}
                            description={val.description}
                            star={val.star}
                            price={val.price}
                            total={val.total}
                        />
                    )

                    )
                }
            </div>
        </div>
    )
}

export default SearchPage