// This is where the data is entered for the table. 
// Things that are still a work in progress include clearing the inputs so 
// they are empty after the data is sent to the table.

import React from 'react';

export default function Form({
    postMember, 
    handleName, 
    handleBook, 
    handleAuthor,
    }) {
    return (
      <form onSubmit={(e) => postMember(e)} className='memberForm'>
       <h3>New Member</h3>
       <label for='name'>Member Name</label> 
       <input type='text' id='name' onChange={(e) => handleName(e.target.value)}/>
       <label for='book'>Book</label> 
       <input type='text' id='book' onChange={(e) => handleBook(e.target.value)}/>
       <label for='author'>Author</label> 
       <input type='text' id='author' onChange={(e) => handleAuthor(e.target.value)}/>
       <button>Submit</button>
    </form>  
    )
    
}