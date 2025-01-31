import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/LayoutHolder/Layout"
import Homescreen from "../Pages/Homescreen"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homescreen />
                }
            ]
        }     
    ]
)