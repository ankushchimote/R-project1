
import Navigation from './components/Navigation';
import './App.css'
import HeroSection from './components/Hero';

const App =() =>{
  return ( 
  <div>
    <Navigation/>
    {/* <Navigation/>   if u do this u will see display again 4 times
    <Navigation/>    we made navigation component for reusability
    <Navigation/> */}

    <HeroSection/>
  </div>
  )
}


export default App;
