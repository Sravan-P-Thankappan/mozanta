
import React from 'react'

const Radio = ({gender,handleInputs}) => {
    return (

        <>
            <input className='mt-1 border border-gray-300 outline-none'
                type="radio" value={gender}
                name='gender' 
                onChange={handleInputs}
                />
            <p>{gender}</p>
        </>

    )
}

export default Radio