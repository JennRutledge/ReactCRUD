//Where the get/fetch data is held
//The table is created to hold the data received with the fetch from
//the mock api using JSX to populate the rows of the table.

import React from 'react';

export default function Table({
    member, 
    deleteMember, 
    updateMember, 
    handleUpdatedName,
    }) {
    return <table className='memberTable'>
        <caption>Book Club Member Book Shelf</caption>
        <thead>
            <tr>
                <th>Member</th>
                <th>Book</th>
                <th>Author</th>
                <th>Delete Member</th>
            </tr>
        </thead>
        <tbody>
            {member.map((member, index) => (
                <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.book}</td>
                    <td>{member.author}</td>
                    <td>
                        <button onClick={() => deleteMember(member.id)}>Delete</button>
                    </td>
                    <td>
                        <input onChange={(e) => handleUpdatedName(e.target.value)} 
                        placeholder='Enter Member Name'></input>
                        <button onClick={(e) => updateMember(member)}>Submit</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
}