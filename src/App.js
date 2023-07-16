// use the House API or another API and create a single page using all 4 CRUD operations.
//create at least one React component, can use more, to represent the resource.
//make the forms and other UI pieces with their own comonents as resonable.

// possibly break this down into more components so it isn't so long.

import './App.css';
import React, {useState, useEffect} from 'react';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  const MOCK_API_URL = 'https://64937ebe0da866a95366757f.mockapi.io/Book_Club_API/Member'

  const [member, setMember] = useState([{
    name:'',
    book:'',
    author:'',
  },
])

const [newMember, setNewMember] = useState({
  name:'',
  book:'',
  author:''
})

const [updatedName, setUpdatedName] = useState('') 

function handleUpdatedName(updatedNameValue) {
  console.log(updatedNameValue)
  setUpdatedName(updatedNameValue)
}

function handleName(nameValue) {
  setNewMember({
    ...newMember,
    name: nameValue
  })
  console.log(nameValue);
}

function handleBook(bookValue) {
  setNewMember({
    ...newMember,
    book: bookValue
  })
}

function handleAuthor(authorValue) {
  setNewMember({
    ...newMember,
    author: authorValue
  })
}

useEffect(() => {
  fetch(MOCK_API_URL)
  .then(data => data.json())
  .then(data => setMember(data))
}, [])

const getMember = () => {
  console.log('doing getMember function')

  fetch(MOCK_API_URL)
  .then(data => data.json())
  .then(data => setMember(data))
};

const postMember = (e) => {
  e.preventDefault()
  console.log('doing postMember')

  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMember)
  }).then(() => getMember())

  setNewMember({
    name:'',
    book:'',
    author:'',
  })
}

const deleteMember = (id) => {
  console.log(id);
  console.log('deleting member');

  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE',
  }).then(() => getMember())
}

const updateMember = (member) => {
  console.log('updating member name')
  let updatedMember = member;
  updatedMember.name = updatedName;
  console.log(updatedMember);
  fetch(`${MOCK_API_URL}/${member.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedMember)
  }).then(() => getMember())
}

  
    return <div className='app'> 
    <Form 
    getMember={getMember}
    postMember={postMember}
    handleName={handleName} 
    handleAuthor={handleAuthor} 
    handleBook={handleBook}
    />
    <Table 
    handleUpdatedName={handleUpdatedName} 
    updateMember={updateMember} 
    deleteMember={deleteMember} 
    member= {member} />
  </div>
}

export default App;
