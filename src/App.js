import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // stop empty data being submitted and also same data being submitted multiple times

    if (event.target.fullname.value === '') {
      alert('Please enter your name');
      return;
    }

    if (event.target.age.value === '') {
      alert('Please enter your age');
      return;
    }

    if (event.target.email.value === '') {
      alert('Please enter your email');
      return;
    } //prevent same data being send multiple times

    const checkEmail = user.find(
      (person) => person.email === event.target.email.value
    );
    const checkName = user.find(
      (person) => person.fullname === event.target.fullname.value
    );

    if (checkEmail || checkName) {
      alert('User already exist');
      return;
    }

    const userData = {
      fullname: event.target.fullname.value,
      age: event.target.age.value,
      email: event.target.email.value,
    };
    setUser([...user, userData]); // make the form on the data empty after submitting data

    event.target.reset();
  }; // filter the users whose age is greater than 30

  const handleFilter = () => {
    // check if there is no user registered
    if (user.length === 0) {
      alert('No user registered! Please register now');
      return;
    }
    const filteredUsers = user.filter((person) => person.age >= 30);
    setFilteredUser(filteredUsers);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Signup Form</h1>
        <div>
          <label htmlFor='fullname'>Full Name</label>
          <input type='text' name='fullname' id='fullname' />
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <input type='number' name='age' id='age' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='btn'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={handleFilter}>
            Filter Data
          </button>
        </div>
      </form>
      <div className='filtered-items'>
        <h2>User Registered</h2>
        <p>
          {user.map((person, index) => (
            <li key={index}>
              Name: {person.fullname} &nbsp; Age: {person.age} &nbsp; Email:{' '}
              {person.email}
            </li>
          ))}
        </p>
        <h3>Filtered users whose age &gt; 30</h3>
        <p>
          {filteredUser.map((person, index) => (
            <li key={index}>
              Name: {person.fullname} &nbsp; Age: {person.age} &nbsp; Email:{' '}
              {person.email}
            </li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default App;
