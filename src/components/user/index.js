import React, { useEffect, useState } from 'react'
export default function User() {

    const [todoData, setTodoData] = useState([])

    const getTodoList = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodoData(json))
    }

    useEffect(() => {
        getTodoList()
    }, [])

    console.log('todoData**', todoData);

    return (
        <div>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Title
                    </th>
                </tr>
                {
                    todoData.map(el => {
                        return (
                            <tr>
                                <td>
                                    {el.id}
                                </td>
                                <td>
                                    {el.title}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
