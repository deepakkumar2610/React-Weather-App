import './App.css';
import Weathercard from './weatherCard';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { WiDayRain } from "react-icons/wi";
import Button from 'react-bootstrap/Button';


function App() {
  const [inputFeild, setInputFeild] = useState('Mumbai');
  const [weatherInfo,setWeatherInfo] = useState({});
  
  let time = new Date().toLocaleTimeString()
  
  const [currentTime, setCurrentTime] = useState(time) 
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  setInterval(UpdateTime)

  
  const handleSubmit =(e)=>{
    e.preventDefault()
    handleClick()
    setInputFeild('')
  }
  const handleClick = async (e) =>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFeild}&units=metric&appid=606b82580da373e8021ee25a288ccc1c`;
      const response = await fetch(url);
      const data = await response.json();
     
      const {temp,humidity,pressure} = data.main;
      const {country,sunset,sunrise} = data.sys;
      const {name} = data;
      const {speed} = data.wind;
      const {main : weathermood} = data.weather[0];
      
      const weatherAppInfo={
        temp,
        humidity,
        pressure,
        country,
        sunrise,
        sunset,
        name,
        speed,
        weathermood
      };
      
      setWeatherInfo(weatherAppInfo);

      // 
    } catch (error) {
      alert("Please enter the proper city name!")
      console.log(error)
    }
  }

  
  useEffect(() =>{
    handleClick();
  },[])

  return (
    <>
      <div className='wrap'>
        <div className='header text-center'>
          <h2 className='header bg-primary py-2'> <WiDayRain size={50} className='brand-logo mx-1' /> React-Weather-App</h2>
        </div>
        <Form onSubmit={handleSubmit} className="input-controls d-flex" >
          <Form.Control
            type="text"
            placeholder="Enter city name..."
            className="me-2"
            aria-label="Search"
            value={inputFeild}
            onChange={(e)=>{setInputFeild(e.target.value)}}
          />
          <Button type='submit' variant="primary">Search</Button>
        </Form>
        
        <Weathercard  currentTime={currentTime} weatherInfo={weatherInfo}/>
      </div>

    </>
  );
}

export default App;
