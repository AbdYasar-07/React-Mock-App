import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

interface Props {
  isAuthenticated: boolean;
  buttonName?: string;
}

function Navbar({ isAuthenticated, buttonName }: Props) {
  const { loginWithRedirect, logout } = useAuth0();

  const Logout = () => {
    logout({
      logoutParams: {
        federated: true,
        returnTo: "http://localhost:5173",
      },
    });
  };

  {
    buttonName == "Commercial" && (
      <form className="form-inline">
        <button
          className="btn btn-primary my-2 my-sm-0 me-5 name"
          type="submit"
          onClick={() => {
            if (!isAuthenticated) {
              loginWithRedirect({
                appState: {
                  returnTo: "http://localhost:4040",
                },
                authorizationParams: {
                  prompt: "consent",
                },
              });
            }
            if (isAuthenticated) {
              Logout();
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
        <nav className="navbar navbar-dark">
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
                  localStorage.removeItem("acc_tkn");
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
