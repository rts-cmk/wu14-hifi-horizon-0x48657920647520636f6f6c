import { Outlet } from "react-router";

export default function Layout(){
    return(
        <>
            <h1>First line</h1>
            <Outlet/>
            <h2>Second line</h2>
        </>

    )
}