import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { useGlobalContext } from '../../context/GlobalState'

import './index.css'

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext()
    return (
        <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <form>
                    <h1>Edit Form</h1>
                    <div className='form-inputs'>
                    <label>
                       <input type='text' placeholder='Enter Transaction' />
                   </label>
                   <label>
                       <input type='text' placeholder='Enter Amount' />
                   </label>
                   <button type='button'>
                       Edit
                    </button>
                    </div>
                </form>
                <button className='close-modal-btn' onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal
