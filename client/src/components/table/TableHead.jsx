
import React from 'react'

const TableHead = () => {
    return (

        <thead className="border-y">
            <tr>
                <th scope="col" className="text-sm font-medium border-x text-gray-900 px-6 py-4 text-left">
                    Sl.No
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Name
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Admission
                    <br />
                    No:
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Class
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Divison
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    Gender
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-x">
                    DOB
                </th>

            </tr>
        </thead>
    )
}

export default TableHead