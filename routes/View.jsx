import { useEffect, useState } from 'react';
import { supabase } from '../supabase'; // assuming you have a separate file that initializes the Supabase client
import { Link } from 'react-router-dom';
import './View.css';



function TimeTravelerList() {
  const [timeTravelers, setTimeTravelers] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    async function fetchTimeTravelers() {
      try {
        const { data, error } = await supabase.from('time-travelers').select('*');
        if (error) {
          throw error;
        }
        setTimeTravelers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTimeTravelers();
  }, []);

  const handleEdit = async (id, newName) => {
    const { data } = await supabase.from('time-travelers').update({ name: newName }).eq('id', id);
    console.log(data);
    setTimeTravelers((prevTimeTravelers) =>
      prevTimeTravelers.map((t) => (t.id === id ? { ...t, name: newName } : t))
    );
   
  };

  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase.from('time-travelers').delete().match({ id });
      if (error) {
        throw error;
      }
      console.log(data);
      // Remove the deleted crewmate from the list
      setTimeTravelers((prevTimeTravelers) => prevTimeTravelers.filter((t) => t.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className = "whole-page">
        <table className = "timeTravelerTable">
        <thead>
            <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {timeTravelers.map((t) => (
            <tr key={t.id}>
                <td>{t.name}</td>
                <Link to={`/timeTravelers/${t.id}`}><td>{t.name}</td></Link>
                <td>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default TimeTravelerList;