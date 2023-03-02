
import React from 'react'
import Table from '../table/Table'

const List = ({ students }) => {
    return (

        <div>

            <div className="flex flex-col ">
                <div className="overflow-x-auto 
                sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full 
                    sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">

                            <Table students={students} />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default List