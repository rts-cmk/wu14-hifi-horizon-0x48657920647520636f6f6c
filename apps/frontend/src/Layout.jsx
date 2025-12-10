import { Outlet } from "react-router";
import Nav from "./components/Nav";

export default function Layout(){
    return(
        <>
            <Nav/>
            <Outlet/>
            <h2>Second line</h2>
        </>

    )
}