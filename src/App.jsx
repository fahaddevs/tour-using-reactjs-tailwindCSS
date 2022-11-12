import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>{
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    
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

  if(tours.length == 0) {
    return (
      <div className="h-screen flex py-10 justify-center">
        <div className='w-4/12 text-center'>
          <h2 className='text-4xl font-bold'>No Tour Left</h2>
          <button 
            type='button'
            className='py-2 px-4 bg-green-600 text-white rounded-lg mt-3'
            onClick={()=>fetchTours()}>
              Refresh
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center py-10">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App