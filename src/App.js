import React, { useState, useEffect } from 'react';
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
      {apiData.length === 0 ? <div> Loading </div> : <Dashboard apiData={apiData} />

      }
    </div>
  );
}

export default App;
