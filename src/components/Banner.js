import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Banner.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Search from './Search';

function Banner() {

    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    function onClickHandler() {
        setShowSearch(!showSearch);
    }

    function explorer() {
        navigate('/search');
    }

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                <Button onClick={onClickHandler} className='banner_search_button' variant='outlined'>
                    {showSearch ? "Hide" : "Show"}
                </Button>
            </div>
            <div className='banner_info'>
                <h1>Lessss go🚀</h1>
                <h4>
                    YOU ONLY LIVE ONCE ✔
                </h4>
                <Button onClick={explorer} variant='outlined'>
                    Explore nearby!
                </Button>
            </div>
        </div>
    )
}

export default Banner