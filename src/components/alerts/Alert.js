import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/GlobalState'

import './index.css'

const Alert = () => {
    const { alerts, removeAlert } = useGlobalContext()
    const { msg, type } = alerts

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [removeAlert, alerts])
    return (       
            <p className={`alert alert-${type}`}>
                {msg} 
            </p>
       
    )
}

export default Alert