import { Likes } from "./Likes"
import React, {useState} from 'react';
 
export const Answer = (props) => {
const [comment, setComment] = useState('');
const [input, setInput] = useState('')


    return (
        <>
            <p>{props.answer}</p>
            <Likes/>
            { comment !== '' && (
                <p>{comment}</p>
            )
                }
           <form
                onSubmit={(e) => {
                    e.preventDefault();
 
                    setComment(input);
                    setInput('');
                }}
            >
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">
                    Add comment
                </button>
            </form>
        </>
    )
} 


/*
Inside an answer component create a form with one input and one submit button.
Make this button controlled component
By submitting the form render comment for the answer in the Answer component (outside of the form) and clear the input in the form.
*/