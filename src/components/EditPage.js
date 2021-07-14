import React from 'react'
import { Route } from 'react-router-dom'

import Modal from './modal/Modal'

const EditPage = () => {
    return (
        <>
          <Route path='/edit-page'>
            <Modal />  
          </Route>
        </>
    )
}

export default EditPage
