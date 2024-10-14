import logo from './logo.svg';
import './App.css';
import date_img from './date_image.gif'
import Button from './button';
import { useState, useEffect } from 'react';
import yes_img from './yes_img.gif'
import kiss from './kiss.gif'

function App() {

  const [img, setImg] = useState(date_img)
  const [showNo, setShowNo] = useState(true)


  const handleImg = () => {
    setImg(kiss)
    setShowNo(false)
  }

  

  return (
    <div className="App">

      <div>
        <h1 id="question">
          Will you go on a date with me? 
        </h1>
        <img src={img}/>
      </div>

      <div class="button-container">
          <button onClick={handleImg}  >Yes</button>
          {showNo && <Button text={"No"} />}
      </div>
      
    </div>
  );
}

export default App;
