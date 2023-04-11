import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase'; // assuming you have a separate file that initializes the Supabase client
import './TimeTraveler.css';

function TimeTraveler() {
  const { id } = useParams();
  const [timeTraveler, setTimeTraveler] = useState(null);

  useEffect(() => {
    async function fetchTimeTraveler() {
      try {
        const { data, error } = await supabase.from('time-travelers').select('*').eq('id', id);
        if (error) {
          throw error;
        }
        setTimeTraveler(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTimeTraveler();
  }, [id]);

  if (!timeTraveler) {
    return <div>Loading...</div>;
  }

  return (
    <div className = "details">
      <h1 className = "character-name">{timeTraveler.name}</h1>
      <p className = "character-origin">{timeTraveler.origin}</p>
      <p className = "character-time-machine">{timeTraveler.timeMachine}</p>
    </div>
  );
};


export default TimeTraveler;