import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";



export const Route = createRootRoute({
    component: () => {
        return (<>
            {/* <Link to="/">
                <h1>Dashboard</h1>
            </Link> */}
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </>
        )
    }
})