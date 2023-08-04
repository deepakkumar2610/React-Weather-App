import React, { useEffect, useState } from 'react'
// import { MdOutlineLightMode } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  WiDayHaze,
  WiDaySunny,
  WiSunrise,
  WiSunset, 
  WiHumidity, 
  WiRain, 
  WiStrongWind, 
  WiCloudy,
  WiDayThunderstorm,
  WiRainMix,
  WiFog 
} from "react-icons/wi";
const Weathercard = ({currentTime, weatherInfo}) => {
  const [weaMoodIcon,setWeaMoodIcon] = useState("");

  const { 
    temp,
    humidity,
    pressure,
    country,
    sunrise,
    sunset,
    name,
    speed,
    weathermood,
  } = weatherInfo;

  useEffect(()=>{
    if (weathermood) {
      switch(weathermood){
        case "Clouds": setWeaMoodIcon(<WiCloudy size={100} />)
        break;
        case "Clear": setWeaMoodIcon(<WiDaySunny size={100} />)
        break;
        case "Thunderstorm": setWeaMoodIcon(<WiDayThunderstorm size={100} />)
        break;
        case "Rain": setWeaMoodIcon(<WiRain size={100} />)
        break;
        case "Haze": setWeaMoodIcon(<WiDayHaze size={100} />)
        break;
        case "Drizzle": setWeaMoodIcon(<WiRainMix size={100} />)
        break;
        case "Mist": setWeaMoodIcon(<WiFog size={100} />)
        break;
        default : setWeaMoodIcon(<WiDaySunny size={100} />)
        break;
      }
    }
  },[weathermood])
  
  let secForSunset = sunset
  let dateForSunset = new Date(secForSunset * 1000)
  let sunsetFormate = `${dateForSunset.getHours()}: ${dateForSunset.getMinutes()}`

  let secForSunrise = sunrise
  let dateForSunrise = new Date(secForSunrise * 1000)
  let sunriseFormate = `${dateForSunrise.getHours()}: ${dateForSunrise.getMinutes()}`
  return (
    <>
        <article className='main-div bg-light'>
          <div className=' icon-div text-center py-4 '>
            {weaMoodIcon}
            {/* <i className={weathermood} size={100}></i> */}
          </div>

          <Container>
            <Row>
              <Col sm={8} className=' bg-dark text-light cols_8_div'>
                <div>
                  <span className='temp_info'>
                    {temp}&deg;C
                  </span>
                </div>
                <div>
                  <span className='weather_mood'>{weathermood}</span>
                  <br></br>
                  <span className='place_info'>{name}, {country}</span>
                </div>
              </Col>
              <Col sm={4} className='cols_4_div bg-primary'>
                <div className='date_time_align text-center '>
                  <span>
                    {new Date().toLocaleDateString()},
                  </span>
                  <br></br>
                  <span>
                    {currentTime}
                  </span>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className=''>
            <Col sm>
                <div className='widgets'>
                  <span className='icon_widgets'>
                    <WiSunrise />
                  </span>
                  <span className='mt-4'>
                    <p>
                      {sunriseFormate} AM
                      <br></br>
                      Sunrise
                    </p>
                  </span>
                </div>
              </Col>
              <Col sm>
                <div className='widgets'>
                  <span className='icon_widgets'>
                    <WiSunset />
                  </span>
                  <span className='mt-4'>
                    <p>
                      {sunsetFormate} PM
                      <br></br>
                      Sunset
                    </p>
                  </span>
                </div>
              </Col>
              <Col sm>
                <div className='widgets'>
                  <span className='icon_widgets'>
                    <WiHumidity />
                  </span>
                  <span className='mt-4'>
                    <p>
                      {humidity}
                      <br></br>
                      Humidity
                    </p>
                  </span>
                </div>
              </Col>
              <Col sm>
                <div className='widgets'>
                  <span className='icon_widgets'>
                    <WiStrongWind />
                  </span>
                  <span className='mt-4'>
                    <p>
                      Wind
                      <br></br>
                      {speed}(m/s)
                    </p>
                  </span>
                </div>
              </Col>
              <Col sm>
                <div className='widgets'>
                  <span className='icon_widgets'>
                    <WiRain />
                  </span>
                  <span className='mt-4'>
                    <p>
                      Pressure
                      <br></br>
                      {pressure}Pascal(Pa)
                    </p>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </article>
    </>
  )
}

export default Weathercard;