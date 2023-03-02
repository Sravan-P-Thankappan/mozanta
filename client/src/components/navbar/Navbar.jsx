import React from 'react'

const Navbar = ({onShowForm}) => {

   const handleStatus = ()=>{
       onShowForm(true)

   }
    return (
        <div className='bg-blue-500 py-4 px-10 flex justify-between'>

            <h3 className='text-slate-50 
        text-xl font-bold '>
                Student Management</h3>

            <button className='bg-slate-100 py-1 px-2 
            rounded-md text-blue-500'
            onClick={handleStatus}
          >
                Add Student
            </button>

        </div>
    )
}

export default Navbar