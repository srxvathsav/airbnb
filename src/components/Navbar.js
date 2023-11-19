import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from './Searchbar';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='header-img' src={logo} />
            </Link>
            {/* <Searchbar /> */}
            {/* <div className='search-bar'>
                <input type='text' />
                <SearchIcon />
            </div> */}
            <div className='host'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMore />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Navbar