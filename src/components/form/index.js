import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// CRUD
// Create - POST method - create a data
// Read - GET method - list down data
// Update - PUT method - edit particular data
// Delete - DELETE method - delete any data

export default function Form(props) {
    // console.log('***', window.location.search.split('').pop());
    const params = useParams()
    console.log('**', params);
    const storedValue = JSON.parse(localStorage.getItem('user')) || []
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (params?.id) {
            setUser(storedValue[params.id])
        }
    }, [])

    const handleOnChange = (event) => {
        const userData = {
            ...user,
            [event.target.name]: event.target.value
        }
        setUser(userData)
    }

    const handleSubmit = () => {
        if (params?.id) {
            let updatedData = storedValue.map((el, i) => {
                if(i == params.id) return user
                else return el
            })
            localStorage.setItem('user', JSON.stringify([...updatedData]))
        } else {
            localStorage.setItem('user', JSON.stringify([...storedValue, user]))
        }
        navigate('/table')
    }

    // if (params.id <= storedValue.length - 1) {

    return (
        <div>
            <h2>{props.heading}</h2>
            <input type='text' name='fName' value={user.fName} onChange={(event) => handleOnChange(event)} />
            <input type='text' name='lName' value={user.lName} onChange={(event) => handleOnChange(event)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

    // } else {
    //     console.log('something went wrong');
    // }
}
