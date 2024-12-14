import React, { useContext } from 'react'
import { AppContext } from './Context';
import Home from './page/Home';

const App = () => {

  const {url} = useContext(AppContext);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App