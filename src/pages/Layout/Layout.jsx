import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header/Header"
import { useSelector } from "react-redux";
const Layout = () => {
    const {layout} = useSelector(store => store.dashboard);
    return (
        <>  
            {
                layout === "client" && <Suspense>
                <Header/>
            </Suspense>
            }
            
            <main className="main" >
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            {
                layout === "client" && <Suspense>
            
            </Suspense>
            }
            
        </>
    )
}

export default Layout;