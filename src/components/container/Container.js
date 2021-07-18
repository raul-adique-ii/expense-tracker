import React from 'react'

const Container = ({ children }) => {
    return (
        <main>
            <section className='glass'>
                {children}
            </section>
        </main>
    )
}

export default Container
