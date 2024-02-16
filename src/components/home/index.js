import { Outlet, useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/form')}>Home Page
            <Outlet />
            {props.children}
        </div>
    )
}


// 93491271008     960903

// import React, { Component } from 'react'

// export default class index extends Component {
//     componentDidMount() {

//     }
//     componentDidUpdate() {

//     }
//     componentWillUnmount() {

//     }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
