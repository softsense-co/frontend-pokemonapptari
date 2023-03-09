import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { FaEdit, FaTrash, Fa } from "react-icons/fa";


const Todo = () => {

    const [newInput, setNewInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const [editID, setEditID] = useState(0);

    const handleChangeInput = (values) => {
        setInputs(values)
        localStorage.setItem("todos", JSON.stringify(values))
    }

    const handleGetInput = () => {
        const dataFromStorage = localStorage.getItem("todos");
        if (dataFromStorage) {
            setInputs(JSON.parse(dataFromStorage))
        }
        
    }

    useEffect(() => {
        alert("hi")
    }, [editID])


    useEffect(() => {
        handleGetInput()

        return () => {

            //
        }
    }, [])

    function AddInput() {
        if (newInput !== "") {
            handleChangeInput([...inputs, { newInput, id: `${newInput}-${Date.now()}`}]);
            setNewInput("")
        }

        
        if (editID) {
            const editArray = inputs.find((input) => input.id === editID);
            const updateArray = inputs.map((input) => 
            input.id === editArray.id ? input={ id: input.id, newInput} : { id: input.id, newInput: input.newInput} );
            handleChangeInput(updateArray);
            setEditID(0);
            return;
        }
        // const input = {
        //     id: Math.floor(Math.random() * 1000),
        //     value: newInput
        // };

        // setInputs(oldList => [...oldList, input]);
        // setNewInput("");


    };

    function DeleteInput(id) {
        const newArray = inputs.filter(input => input.id !== id);
        handleChangeInput([...newArray]);
    };

    function EditInput(id) {
        const editArray = inputs.find(input => input.id === id);
        setNewInput(editArray.newInput);
        setEditID(id);
    };

    return (
        <div>
            <Header />
            <h1 className='text-3xl font-extrabold text-center py-8 text-slate-600'>Todo List</h1>
            <div>
                <div className='flex justify-center'>
                    <input type="text" className='w-[350px] border-1 rounded-lg p-2 mt-1'
                        value={newInput}
                        onChange={e => setNewInput(e.target.value)} />

                    <button
                        onClick={() => AddInput()}
                        type="submit"
                        className=' px-3 py-[1px] bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'>
                        Add
                    </button>


                </div>
                <div className='flex justify-center py-5'>
                    <ul className='font-medium text-slate-600'>
                        {inputs.map(newInput => {
                            return (
                                <li className='px-5' key={newInput.id}>{newInput.newInput}
                                    <button
                                        type="submit"
                                        className=' p-3 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'
                                        onClick={() => DeleteInput(newInput.id)}> <FaTrash />
                                    </button>
                                    <button
                                        type="submit"
                                        className=' p-3 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'
                                        onClick={() => EditInput(newInput.id)}> <FaEdit />
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