import Main from "../Pages/Main"
import Create from "../Pages/Create"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Edit from "../Pages/Edit"

const route = [
    {
        element :  
        <>
            <Header/>
            <Outlet/>
        </>,
        
        path: "/",
        children : [
            {
                element : <Main/>,
                index: true
            },
            {
                element:  <Create/>,
                path: "/create"
            },
            {
                element : <Edit/>,
                path: "/edit_todo/:id"
            }
            
        ]
    }
    
]

export default route