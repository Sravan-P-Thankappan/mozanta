
import React from 'react'
import TableData from './TableData'
import TableHead from './TableHead'

const Table = ({ students }) => {
    return (

        <table className="min-w-full bg-white shadow-lg 
        border border-gray-300">

            <TableHead />
            {
                students.map((data,index) => {
                    return (
                        <TableData
                        key={index}
                        student={data}
                        no={index+1}
                        />
                    )
                })


            }

        </table>
    )
}

export default Table