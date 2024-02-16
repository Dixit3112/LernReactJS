import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Table() {
    const [storedValue, setStoredValue] = useState(JSON.parse(localStorage.getItem('user')) || [])
    const navigate = useNavigate()
    const handleEdit = (index) => {
        // navigate(`/form?id=${index}`)
        navigate(`/form/${index}`)
    }
    const handleDelete = (index) => {
        let updatedData = storedValue.filter((el, i) => i !== index)
        setStoredValue(updatedData)
        localStorage.setItem('user', JSON.stringify([...updatedData]))
    }
    return (
        <table>
            <tr>
                <th>Sr</th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
            </tr>
            {
                storedValue.map((el, index) => {
                    return (
                        <tr>
                            <td>
                                {index}
                            </td>
                            <td>
                                {el.fName}
                            </td>
                            <td>
                                {el.lName}
                            </td>
                            <td>
                                <button onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
