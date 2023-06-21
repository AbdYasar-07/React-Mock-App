import { TailSpin } from "react-loader-spinner";
import Navbar from "./Components/Header/Navbar.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "./Components/ProfileCard.js";
import "./Components/Header/Header.css";
// import ErrorCard from "./Components/ErrorCard.js";

interface Props {
  buttonName?: string;
}

function App({ buttonName }: Props) {
  const FetchAccessToken = () => {
    getAccessTokenSilently()
      .then((success) => {
        console.log("Access Token", success);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} buttonName={buttonName} />
      <div style={{ position: "absolute", top: "35%", left: "43%" }}>
        {isLoading && (
          <TailSpin
            height="80"
            width="80"
            color="blue"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="center"
          />
        )}
      </div>
      {isAuthenticated && <ProfileCard user={user} buttonName={buttonName} />}
      {/* {!isAuthenticated && error && (
        <ErrorCard errorTitle={error.name} errorMessage={error.message} />
      )} */}
      {isAuthenticated ? FetchAccessToken() : null}
    </>
  );
}

export default App;
