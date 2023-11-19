import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const API_KEY = '0214c3ef3160f620bc044be3b68270fe';
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
          setError('');
          setData(response.data);
          console.log(response.data);        
      }).catch(error => {
        setError('City not found. Please enter a valid City Name');
        setData({});
        console.log('City Not Found')
      });
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text' />
      </div>
      
      <div className='main-container'>
        <div className='top'>
          <div className='location-details'>
            <p>{data.name}</p>
            {error && <p className="error">{error}</p>}
          </div>

          <div className='temp'>
            {data.main ? <p>{Math.round(data.main.temp)}°C</p> : null}
          </div>

          <div className='description'>
            <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          </div>

        </div>
        {data.name !== undefined &&
          <div className='bottom'>
            <div className='temp-min'>
              {data.main ? <p>{Math.round(data.main.temp_min)} °C</p> : null}
              <p>Min</p>
            </div>
            <div className='temp-max'>
              {data.main ? <p>{Math.round(data.main.temp_max)} °C</p> : null}
              <p>Max</p>
            </div>
            <div className='humidity'>
              {data.main ? <p>{Math.round(data.main.humidity)} %</p> : null}
              <p>Humidity</p>
            </div>
          </div>
        }
        <div className='footer'>
        <p>Designed & Built by <a href='https://github.com/newnormal-arch'>Bongani Ntshingila</a></p>
      </div>
      </div>
      
    </div>
  );
}

export default App;
