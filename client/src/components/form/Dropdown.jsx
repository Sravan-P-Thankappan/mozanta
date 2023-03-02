
import React from 'react'

const Dropdown = ({ item, label,name ,handleInputs}) => {

    return (

        <>
            <label htmlFor="">{label}</label>
            <select name={name} className='p-1 border
           border-gray-300 outline-none'
           
           onChange={handleInputs}
           
           >
                <option value="">Select {label}</option>
                {
                    item.map((element, i) => {
                        return <option key={i}  value={element}>{element}</option>
                    })
                }
            </select>
        </>
    )
}

export default Dropdown