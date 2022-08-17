import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ handleSubmit, setNewItem, newItem }) => {
    const inputRef = useRef()
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add item</label>
            <input
                ref={inputRef}
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
                id='addItem'
                autoFocus
                placeholder='Add Item'
                required />
            <button type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
