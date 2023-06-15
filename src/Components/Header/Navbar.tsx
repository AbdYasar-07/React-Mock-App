import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

interface Props {
  isAuthenticated: boolean;
}

function Navbar({ isAuthenticated }: Props) {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand ps-5 name">Mock-App</a>
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
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </form>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
