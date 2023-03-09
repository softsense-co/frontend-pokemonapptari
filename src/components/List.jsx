import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className='container'>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <ul className='list-group list-group-flush' key={id}>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            {title}
                            <div style={{ float: "right" }}>
                                <button
                                    type='button'
                                    className='px-5 py-[1px] bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'
                                    onClick={() => editItem(id)}>
                                    <FaEdit />
                                </button>
                                <button
                                    type='button'
                                    className='px-5 py-[1px] bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-lg hover:bg-[#96b6b5]'
                                    onClick={() => removeItem(id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    </ul>
                );
            })}
        </div>
    );
};

export default List;