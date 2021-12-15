import React from 'react'
import AddProduct from '../Components/AddProduct'
import Heading from '../Components/Heading'
// import ModalAdd from '../Components/ModalAdd'
import Pagination from '../Components/Pagination'
import Table from '../Components/Table'

function Dashboard() {
    return (
        <div className='lg:container lg:mx-auto lg:max-w-7xl'>
            <Heading/>
            <AddProduct/>
            <Table/>
            <Pagination/>
        </div>
    )
}

export default Dashboard
