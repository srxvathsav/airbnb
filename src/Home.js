import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import './Home.css';
import Searchbar from './components/Searchbar';

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getData = () => {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((myData) => {
        console.log(myData.hotels);
        setData(myData.hotels);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const searchSetter = (message) => {
    console.log("hi" + message);
    setSearch(message);
  }

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='home'>
      
      <Searchbar searchSetter={searchSetter} />
      <Banner />

      <div className='card_section'>
        {
          filteredData && filteredData.length > 0 && filteredData.map((val) =>
          (<Card
            key={val.id}
            src={val.image}
            title={val.name}
            desc={val.description}
            price={val.price}
          />)
          )
        }
      </div>
    </div>
  )
}

export default Home;
