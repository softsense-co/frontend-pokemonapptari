import React, { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = () => {

    const [newInput, setNewInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const [editID, setEditID] = useState(0);

    // Local storage
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
    // Local storage
    useEffect(() => {
        handleGetInput()

        return () => {

            //
        }
    }, [])

    function addList() {
        if (newInput !== "") {
            handleChangeInput([...inputs, { newInput, id: `${newInput}-${Date.now()}` }]);
            setNewInput("")
        }


        if (editID) {
            const editArray = inputs.find((input) => input.id === editID);
            const updateArray = inputs.map((input) =>
                input.id === editArray.id ? input = { id: input.id, newInput } : { id: input.id, newInput: input.newInput });
            handleChangeInput(updateArray);
            setEditID(0);
            return;
        }


    };

    function deleteList(id) {
        const newArray = inputs.filter(input => input.id !== id);
        handleChangeInput([...newArray]);
    };

    function editList(id) {
        const editArray = inputs.find(input => input.id === id);
        setNewInput(editArray.newInput);
        setEditID(id);
    };

    return (
        <div>
            <div className='bg-white/50 my-10 py-3 rounded-3xl shadow-2xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-[50rem]'>
                <h1 className='text-3xl font-extrabold text-center py-8 text-slate-600'>Todo List</h1>
                {/* form todo */}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addList()
                }}>
                    <div className='flex justify-center items-center'>
                        <input type="text" className='w-[350px] rounded-lg p-2 mt-1'
                            value={newInput}
                            onChange={e => setNewInput(e.target.value)} />

                        <div className='px-3'>
                            <button
                                onClick={() => addList()}
                                type="button"
                                className='px-3 py-[10px] bg-[#8ebbb8] text-slate-800 font-semibold text-sm uppercase rounded-lg hover:bg-[#6ea4a2]'>
                                Add
                            </button>
                        </div>

                    </div>
                </form>

                <div className='py-5'>
                    <ul className=' font-medium text-slate-600'>
                        {inputs.map(newInput => {
                            return (
                                <div className='grid grid-cols-2 items-center py-1 px-44'>
                                    <li key={newInput.id}>{newInput.newInput}</li>
                                    <div className='md:pl-20 lg:pr-28 xl:pr-[50px]  grid grid-cols-2 gap-3'>
                                        <button
                                            type="button"
                                            className='p-[11px] bg-[#55a8a3] text-slate-100 font-semibold rounded-md hover:bg-[#96b6b5]'
                                            onClick={() => deleteList(newInput.id)}>
                                            <FaTrash />
                                        </button>

                                        <button
                                            type="button"
                                            className='p-[11px] bg-[#55a8a3] text-slate-100 font-semibold rounded-md hover:bg-[#96b6b5]'
                                            onClick={() => editList(newInput.id)}>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>

                            )
                        })}
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Todo