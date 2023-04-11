import { useState } from 'react';
import { supabase } from '../supabase';
import './Create.css'

function CreateForm() {
    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [timeMachine, setTimeMachine] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data, error } = await supabase
          .from('time-travelers')
          .insert({ name, origin, timeMachine });
        if (error) {
          throw error;
        }
        console.log(data);
        // Optionally, clear the input fields
        setName('');
        setOrigin('');
        setTimeMachine('');
        alert("Time Traveleler added!");

      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <form className = "character-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Origin:
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </label>
        <label>
          Time Machine:
          <input type="text" value={timeMachine} onChange={(e) => setTimeMachine(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    );
  }

  export default CreateForm;