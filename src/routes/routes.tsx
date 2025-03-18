import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Catch from "../pages/catch/Catch";
import MyPokemon from "../pages/myPokemon/MyPokemon";



export const router = createBrowserRouter([
    
    
    
    {
        element: <Layout />,
        path:"/",
        children:[
            {   
                element: <Home />,
                path:"/",
                index:true
            },
            {
                element: <MyPokemon />,
                path:"/my-pokemon",
            },
            {
                element: <Detail />,
                path:`/detail/:pokeName`,
                
            },
            {
                element: <Catch />,
                path:`/catch/:pokeName`,
                
            },
               
        ]
    }
]); 