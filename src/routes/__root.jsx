import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";



export const Route = createRootRoute({
    component: () => {
        return (<>
            <h1>Main root</h1>
            <Outlet />
            <TanStackRouterDevtools />
        </>
        )
    }
})