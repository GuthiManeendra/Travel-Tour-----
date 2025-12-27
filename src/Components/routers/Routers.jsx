import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import FeaturedTourList from "../Featured-tours/FeaturedTourList"


export const Routers=()=>{
    return(
        <>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/feature" element={<FeaturedTourList/> }/>
             

        </Routes>
        
        </>
    )
}