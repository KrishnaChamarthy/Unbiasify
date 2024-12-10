import React, { useContext } from 'react'
import { AppContext } from './Context';
import FileUpload from './components/FileUpload';

const App = () => {

  const {url} = useContext(AppContext);

  return (
    <div>
      <FileUpload />
    </div>
  )
}

export default App