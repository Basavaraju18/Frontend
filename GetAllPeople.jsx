import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function GetAllPeople() {
   
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const result = await axios.get('http://localhost:8080/people/getall');
    setPeople(result.data);
   
  };

  return (
    <div className='container'>
    <h3 className='text-center m-1' >Get All People</h3>
      <div className='py-4'></div>
      <table className='table'>
         
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>People Name</th>
            <th scope='col'>People Gender</th>
            <th scope='col'>People Age</th>
          </tr>
        </thead>
        <tbody>
          {people.length > 0 ? (
            people.map((person, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{person.peopleName}</td>
                <td>{person.peopleGender}</td>
                <td>{person.peopleAge}</td>
              </tr>
            ))
          ) 
          : (
            <tr>
              <td colSpan='4'>No people data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}





