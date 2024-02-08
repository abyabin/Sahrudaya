import './App.css';

import {Route,Routes} from 'react-router-dom'
import Main from './main';
import { useEffect,useState } from 'react';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import Counsellor from './components/counsellor/Counsellor';

function App() {
  
  const LoadingScreen = () => (
    <div className="loading-screen">
      <img src="loading.gif" alt="Loading" />
    </div>
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    
      <div className="">
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/counsellor' element={<Counsellor/>}/>
          </Routes>

        )}
          </div>
          );
}

export default App;
