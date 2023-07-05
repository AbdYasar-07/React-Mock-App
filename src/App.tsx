import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

interface Props {
  buttonName?: string;
}

function App({ buttonName }: Props) {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Profile buttonName={buttonName} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      {/* <Routes>
        <Route path="/login" Component={Login}>
        </Route>
      </Routes> */}
      {<RouterProvider router={route} />}
    </>
  );
}

export default App;
