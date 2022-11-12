import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false)
    setTours(tours)
  }

  useEffect(()=>{
    fetchTours()
  }, [])

  if(loading){
    return (
      <div className="h-screen flex py-10 justify-center">
        <div className='w-4/12'>
          <Loading/>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center py-10">
      <Tours tours={tours} />
    </div>
  )
}

export default App