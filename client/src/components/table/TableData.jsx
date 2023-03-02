
import React from 'react'

const TableData = ({ student,no}) => {
    
    return (

        <tbody>

            
                        <tr className="border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x">{no}</td>
                            <td className="text-sm border-x text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {student.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                                {student.admissionNumber}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                            {student.standard}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                            {student.division}

                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                            {student.gender}

                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-x">
                            {student.dateOfBirth}

                            </td>
                        </tr>
               


            
        </tbody>
    )
}

export default TableData