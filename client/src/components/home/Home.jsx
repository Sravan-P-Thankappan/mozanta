
import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

const Home = () => {

    const [value, setValue] = useState(false)
    const [students,setStudents] = useState([])

    const showForm = (status) => {
        setValue(status)
    }
      
    const fetchStudents = ()=>{
        axios.get('http://localhost:8080/students')
        .then((response)=>{
            
             setStudents(response.data)
        })
        .catch((error)=>{

               console.log(error)
        })
    }

    useEffect(()=>{
        fetchStudents()
    },[])


    return (
        <div className=' '>
            <Navbar onShowForm={showForm} />
                  
            <div className='w-10/12 mx-auto mt-5 '>
                {
                    !value ? <List students={students} /> : 
                    <Form 
                    fetchStudents = {fetchStudents}
                    setValue ={setValue}
                    />
                }
            </div>

        </div>
    )
}

export default Home