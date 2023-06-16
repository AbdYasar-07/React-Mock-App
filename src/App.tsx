// import { useState } from "react";
// import ListGroupComponent from "./Components/ListGroup";
// import Alert from "./Components/Alert";
import { TailSpin } from "react-loader-spinner";
import Navbar from "./Components/Header/Navbar.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "./Components/ProfileCard.js";
import "./Components/Header/Header.css";
import ErrorCard from "./Components/ErrorCard.js";

interface Props {
  buttonName?: string;
}

function App({ buttonName }: Props) {
  // const [showAlert, setShowAlert] = useState(false);
  // const [selectedItem, setSelectedItem] = useState("");
  // const cities = [
  //   "Trichy",
  //   "Chennai",
  //   "Karur",
  //   "Coimbatore",
  //   "Salem",
  //   "Namakal",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(`Selected City ${item}`);
  //   setShowAlert(true);
  //   setSelectedItem(item);
  // };

  const FetchAccessToken = () => {
    getAccessTokenSilently()
      .then((success) => {
        console.log("Access Token", success);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { user, isAuthenticated, isLoading, error, getAccessTokenSilently } =
    useAuth0();

  return (
    <>
      {/* {showAlert == true && (
        <Alert>
          Selected City  <b>{selectedItem}</b>
        </Alert>
      )}
      <ListGroupComponent
        alias="City"
        items={cities}
        itemsLength={cities.length}
        heading="Cities List"
        onSelectItem={handleSelectItem}
      /> */}

      <Navbar isAuthenticated={isAuthenticated} buttonName={buttonName} />
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
      {isAuthenticated && <ProfileCard user={user} buttonName={buttonName} />}
      {!isAuthenticated && error && (
        <ErrorCard errorTitle={error.name} errorMessage={error.message} />
      )}
      {isAuthenticated ? FetchAccessToken() : null}
    </>
  );
}

export default App;
