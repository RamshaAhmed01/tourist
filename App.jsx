import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import coffee from './assets/coffee.avif'
import Navbar from'./Components/Navbar'
import image from './assets/image.jpg'
import vdv from './assets/home page.jpg'
// import Banner from './Components/Banner'
import Packages from './Components/Packages'
import Footer from './Components/Footer'
// import Button from './Components/Button';
import Forms from './Components/Forms'
import AboutUs from './Components/AboutUs'
import Places from './Components/Places'
import Booking from './Components/BookingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {


  return (
    <> 
      <div>
        <img className='img' src={image} />
        <Navbar/>
        <img className='img2' src={vdv}/>
        <div className='bg'>
          <div className='input'>
         <input type="date" name="" id="" placeholder='Date/Time' /> <br /> <br />
        {/* <Button/> */}
        <Forms/>    
         </div>
        </div>
        <AboutUs/>
      <center><h1>Most Visited Places On Earth</h1></center>
        <Places/>
       <center><h1>Discounted Packages</h1></center>
        {/* <h4>Login</h4> */}
        {/* <Banner/> <br /> */}
        <Packages/>
        <Booking/> 
        {/* <center>
          <h4>Booking iNformation</h4>
          <input type="date" name="" id="" /> <hr />
          
          <input type="text" placeholder='No.Of Days' />
          
        </center> */}
        <Footer/>
      </div>
  
    </>
  )
}

export default App
