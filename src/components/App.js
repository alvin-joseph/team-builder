import './App.css';
import React, { useState } from 'react'
import Form from './Form'

const initialFormValues = { //you must first initialize the form with these values that way you can change them to blank after every input
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]) //each member is put into this new array
  //normally you would use an axios request to set members to 
  //setFriends([...members, res.data]) which makes a copy of members and changes the res.data components

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) return

    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  }
  return (
    <div className="container">
      <header className="App-header">
        <h1>Team Builder App</h1>
      </header>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
        {members.map((member, i) => {
          return (
            <div key={i} className='team container'>
              <h2>Name: {member.name}</h2>
              <br></br>
              <p>Email: {member.email}</p>
              <br></br>
              <p>Role: {member.role}</p>
            </div>
          )
        })}
        
    </div>
  );
}

export default App;
