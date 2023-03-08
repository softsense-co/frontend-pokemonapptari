import React, { useState } from 'react'
import Header from '../components/header'

const Todo = () => {

    const [newInput, setNewInput] = useState("");
    const [inputs, setInputs] = useState([]);

    function AddInput() {

        const input = {
            id: Math.floor(Math.random() * 1000),
            value: newInput
        };

        setInputs(oldList => [...oldList, input]);
        setNewInput("");


    };

    function DeleteInput(id) {
        const newArray = inputs.filter(input => input.id !== id);
        setInputs(newArray);
    };

    return (
        <div>
            <Header />
            <h1 className='text-3xl font-extrabold text-center py-8 text-slate-600'>Todo List</h1>
            <div>
                <div className='flex justify-center'>
                    <input type="text" className='w-[350px] border-1 rounded-lg p-2 mt-1'
                        value={newInput}
                        required
                        onChange={e => setNewInput(e.target.value)} />

                    <button
                        onClick={() => AddInput()}
                        type="submit"
                        className=' px-5 py-[1px] bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'>
                        Add
                    </button>


                </div>
                <div className='flex justify-center py-5'>
                    <ul className='font-medium text-slate-600'>
                        {inputs.map(input => {
                            return (
                                <li key={input.id}>{input.value}
                                    <button
                                    type="submit"
                                    className=' px-5 py-2 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'
                                        onClick={() => DeleteInput(input.id)}>Delete
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Todo