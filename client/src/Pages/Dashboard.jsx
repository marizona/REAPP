import React from 'react'
import Heading from '../Components/Heading'
// import ModalAdd from '../Components/ModalAdd'
import Pagination from '../Components/Pagination'
import Table from '../Components/Table'

function Dashboard() {
    return (
        <div className='lg:container lg:mx-auto lg:max-w-7xl'>
            <Heading/>
            <Table/>
            <div className='text-center'>
            <Pagination/>
            </div>
           
          
        </div>
    )
}

export default Dashboard
