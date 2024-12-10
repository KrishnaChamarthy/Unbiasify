import React, { useContext } from 'react'
import axios from 'axios';
import { AppContext } from './Context';

const App = () => {

  const {url} = useContext(AppContext);

  const handleClick =  async() => {
    const response = await axios.get(url+"/api/health");
    console.log(response);
    
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App