import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css"
import { useState } from 'react';


function Searchbar({ searchSetter }) {

    const [msg, setMsg] = useState('');

    const sendMessage = () => {
        // console.log(msg);
        searchSetter(msg);
    };

    return (
        <div className='search-bar'>
            <input
                type='text'
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button onClick={sendMessage}>
                <SearchIcon />
            </button>
        </div>
    )
}

export default Searchbar