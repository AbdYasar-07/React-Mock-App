import { TailSpin } from "react-loader-spinner";
import Navbar from "./Header/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "./ProfileCard";
import "./Header/Header.css";

interface Props {
  buttonName?: string;
}

const Profile = ({ buttonName }: Props) => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  const FetchAccessToken = () => {
    getAccessTokenSilently()
      .then((tkn) => {
        sessionStorage.setItem("acc_tkn", tkn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const GetIdToken = () => {
    getIdTokenClaims()
      .then((payload) => {
        sessionStorage.setItem("id_tkn", payload?.__raw ? payload.__raw : "");
      })
      .catch((error) => {
        console.log("error ::", error);
      });
  };

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
      {isAuthenticated ? GetIdToken() : null}
    </>
  );
};

export default Profile;
