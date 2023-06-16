import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

interface Props {
  isAuthenticated: boolean;
  buttonName?: string;
}

function Navbar({ isAuthenticated, buttonName }: Props) {
  const { loginWithRedirect, logout } = useAuth0();

  {
    buttonName == "Commercial" && (
      <form className="form-inline">
        <button
          className="btn btn-primary my-2 my-sm-0 me-5 name"
          type="submit"
          onClick={() => {
            if (isAuthenticated == false) {
              loginWithRedirect();
            }
            if (isAuthenticated == true) {
              logout({
                logoutParams: { returnTo: window.location.origin },
              });
            }
          }}
        >
          {isAuthenticated
            ? `Logout For ${buttonName}`
            : `Login For ${buttonName}`}
        </button>
      </form>
    );
  }

  return (
    <div>
      <>
        <nav className="navbar navbar-dark" style={{ background: "#3f5997" }}>
          <a className="navbar-brand ps-5 name">
            <img
              src="https://images.carriercms.com/image/upload/v1629825291/common/logos-svg/carrier-logo.svg"
              style={{ width: "100px", height: "60px" }}
            ></img>
          </a>
          <form className="form-inline">
            <button
              className="btn btn-primary my-2 my-sm-0 me-5 name"
              type="submit"
              onClick={() => {
                if (isAuthenticated == false) {
                  loginWithRedirect();
                }
                if (isAuthenticated == true) {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                }
              }}
            >
              {isAuthenticated
                ? `Logout For ${buttonName}`
                : `Login For ${buttonName}`}
            </button>
          </form>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
