import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Slidebar'

const Home = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
            </div>


            <div className="row g-0">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">{children}</div>
            </div>


        </>
    )
}

export default Home
