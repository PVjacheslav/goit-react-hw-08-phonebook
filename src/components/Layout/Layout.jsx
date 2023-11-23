import { AppBar } from "components/AppBar/AppBar"
import { Wrapper } from "./Layout.styled"
import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
    return (
        <Wrapper>
            <AppBar />
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Wrapper>
    );
};