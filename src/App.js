import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Dashboard from './components/Dashboard';
import { get } from './modules/rest';
import { customInterval } from './modules/customInterval';
import './App.css';


function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = () => get('https://foobar-exam-data.herokuapp.com/', (data) => setApiData(data));
    customInterval(fetchData, 3000);
  }, []);

  return (
    <div className="App">
      {apiData.length === 0 ?
        <div className="loader-wrapper">  <Loader
          type="RevolvingDot"
          color="#bf2d26"
          height={100}
          width={100}
        /> </div>
        : <Dashboard apiData={apiData} />
      }
    </div>
  );
}

export default App;
