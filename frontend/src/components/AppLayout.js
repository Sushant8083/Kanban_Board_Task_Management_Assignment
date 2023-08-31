import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
    return (
        <div className='bg-white'>
        <Navbar />
    
        {/* Desktop View */}
        <div className='hidden md:flex-1 md:flex w-screen flex container mx-auto md:flex-row' style={{ height: 'calc(100vh - 56px)' }}>
            <div className="w-[220px]">
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="flex">
                    {children}
                </div>
            </div>
        </div>
        
        {/* Mobile View */}
        <div className='w-screen md:hidden container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
            <div className="md:w-[220px] mb-4 md:mb-0 md:mr-4 mx-auto">
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default AppLayout