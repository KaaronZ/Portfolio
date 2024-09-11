import './Styles/Variables.css'
import './App.css'
import { useState } from 'react';


import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';

import { faSun} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');

  const renderPage = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'About Me':
        return <AboutMe />;
      default:
        return <Home />;
    }
  }


  return (
    <div className='container'>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <div>
        {renderPage()} 
      </div>
      <div className='dayNight'> 
        <FontAwesomeIcon icon={faSun}/>
      </div>
    </div>
  )
}

export default App
