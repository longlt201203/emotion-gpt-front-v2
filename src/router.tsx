import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import ErrorPage from "./error-page";
import Index from "./routes/Index";
import Login, { action as loginAction } from "./routes/Login";
import Auth, { loader as authLoader } from "./layouts/Auth";
import Chat, { loader as chatLoader, action as chatAction } from "./routes/Chat";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                element: <Auth />,
                loader: authLoader,
                children: [
                    {
                        path: "chat/:chatId?",
                        element: <Chat />,
                        loader: chatLoader,
                        action: chatAction
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    }
]);

export default router;