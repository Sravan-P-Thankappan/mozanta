
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Radio from './Radio'
import axios from 'axios'


const Form = ({fetchStudents,setValue}) => {

  const standard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const division = ['A', 'B', 'C']

  const [formData, setFormData] = useState({})
  const [inputError, setInputError] = useState({})




  //--------input validation---------------

  const validation = (data) => {

    let error = {}

    console.log(data.name)
    let nameRegex = /^[a-zA-Z' ]+$/;
    let dateRegex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/
    let divisionRegex = /[A-C]/
    let classRegex = /[0-9]/
    if (data.name === undefined || data.name.length < 3) error.name = "This field is required"
    if (!dateRegex.test(data.dateOfBirth)) error.date = "This field is required"
    if (!divisionRegex.test(data.division)) error.division = "This field is required"
    if (!classRegex.test(Number(data.standard))) error.class = "This field is required"
    if (data.gender === undefined) error.gender = "This field is required"

    return error

  }



  const handleInputs = (e) => {

    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  }




  const handleForm = (e) => {

    e.preventDefault()


    let res = validation(formData)

    setInputError(res)


    if (Object.keys(res).length === 0) {
      axios.post('http://localhost:8080/student', formData)
        .then(() => {
          fetchStudents()
          setValue(false)
          
        })
        .catch((er) => {

          console.log(er.message)
        })
    }

    return


  }


  return (
    <div className=' w-full flex justify-center mt-10 p-5'>

      <form onSubmit={handleForm} className='w-full'>

        <div className='flex flex-col gap-2 w-1/2 mx-auto p-5  
         bg-white shadow-2xl border-[1.5px] border-gray-300'>

          <p className='text-center text-blue-500 
          text-lg font-bold '>STUDENT FORM</p>


          <label htmlFor="Name">Name</label>
          <input className='outline-none p-1 border
           border-gray-300'
            type="text"
            name='name'
            onChange={handleInputs}
          />

          <p className='text-sm text-red-600 font-extralight'>
            {inputError.name}

          </p>


          <label htmlFor="Name">Date Of Birth</label>
          <input className='p-1 border
           border-gray-300 outline-none'
            type="date"
            name='dateOfBirth'
            onChange={handleInputs}
          />

          <p className='text-sm text-red-600 font-extralight'>
            {inputError.date}

          </p>

          <Dropdown item={standard}
            name={'standard'}
            label={'Class'}
            handleInputs={handleInputs}

          />

          <p className='text-sm text-red-600 font-extralight'>
            {inputError.class}

          </p>


          <Dropdown item={division}
            name={'division'}
            label={'Division'}
            handleInputs={handleInputs}

          />


          <p className='text-sm text-red-600 font-extralight'>
            {inputError.division}

          </p>

          <label htmlFor="">Gender</label>
          <div className='flex gap-2'>
            <Radio gender={'male'}
              handleInputs={handleInputs}

            />
            <Radio gender={'female'}
              handleInputs={handleInputs}

            />
          </div>

          <p className='text-sm text-red-600 font-extralight'>
            {inputError.gender}

          </p>

          <button className='bg-blue-500 mt-4 w-10/12 mx-auto p-1
           text-white text-base font-bold '
            type='submit'>SUBMIT</button>

        </div>
      </form>

    </div>
  )
}

export default Form