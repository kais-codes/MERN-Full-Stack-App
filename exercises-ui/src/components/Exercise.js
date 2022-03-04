import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { VscEdit } from 'react-icons/vsc';

function Exercise({ exercise, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><VscEdit /></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
};

export default Exercise;