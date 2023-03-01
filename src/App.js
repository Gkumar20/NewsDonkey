
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const apikey="591a6fa110224ed984607869cec17c58"
  const [progress, setprogress] = useState(0)
  const setProgressfunc=(progress)=>{
    setprogress(progress)
  }

    return (
      <div>
        <Router>
        <LoadingBar
            height={5}
            color='#f11946'
            progress={ progress}
          />
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path="/entertainment" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="business" pageSize={6} country="in" category="business" />} />
            <Route exact path="/health" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path="/science" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="science" pageSize={6} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apikey={ apikey} setProgressfunc={ setProgressfunc} key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )

}
export default App;
