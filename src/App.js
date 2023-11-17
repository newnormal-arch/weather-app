import React, {useState} from 'react';
import axios from 'axios';


function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=0214c3ef3160f620bc044be3b68270fe';

  return (
    <div className="App">
      <div className='main-container'>
        <div className='top'>
          <div className='location-details'>
            <p>Johannesburg</p>
          </div>

          <div className='temp'>
            <p>23 *C</p>
          </div>

          <div className='description'>
            <p>Cloudy</p>
          </div>

        </div>
        <div className='bottom'>
          <div className='temp-details'>
            <p>23 *C</p>
          </div>
          <div className='humidity'>
            <p>20 %</p>
          </div>
          <div className='winds'>
            <p>6 k/ph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
