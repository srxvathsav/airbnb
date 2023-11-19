import React, { useState } from 'react';
import "./SearchResult.css";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import the filled heart icon

function SearchResult({
    img,
    location,
    title,
    desc,
    star,
    price,
    total
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleClick() {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            {isFavorite ? (
                <FavoriteIcon onClick={handleClick} className='searchResultHeartFilled' />
            ) : (
                <FavoriteBorderIcon onClick={handleClick} className='searchResultHeart' />
            )}
            <div className='searchResult_info'>

                <div className='searchResult_infoTop'>
                    <h1>{location}</h1>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className='searchResult_infoBottom'>
                    <div className='searchResult__stars'>
                        <StarIcon className="searchResult__star" />
                        <strong>{star}</strong>
                    </div>
                </div>
                <div className='searchResultPrices'>
                    <h1 className='price'>{price}</h1>
                    <h2 className='total'>{total}</h2>
                </div>

            </div>
        </div>
    );
}

export default SearchResult;
