import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ padding: "10px",display:"flex",justifyContent:"space-between",background: "#3f5997"  }}>
       <div>
           <a className="navbar-brand ps-5 name">
            <img
              src="https://images.carriercms.com/image/upload/v1629825291/common/logos-svg/carrier-logo.svg"
              style={{ width: "100px", height: "60px" }}
            ></img>
          </a> 
       </div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <Auth0Provider
            domain="dev-o8ea8tzikc0zrjie.us.auth0.com"
            clientId="9lmP5sTdoxpbtq8hy0hc3j89pgqYTHri"
            authorizationParams={{ redirect_uri: window.location.origin }}
          > 
          <div style={{marginRight:"30px",borderRight:"solid 2px #ccc",alignSelf:"flex-start"}}>
            <App buttonName="Residential"/>
          </div>
          </Auth0Provider>

          <Auth0Provider
            domain="dev-o8ea8tzikc0zrjie.us.auth0.com"
            clientId="gwf2UlWH5njGVh6T8PoyoM8cD7R97igf"
            authorizationParams={{ redirect_uri: window.location.origin }}
          >
            <div  style={{marginLeft:"10px",alignSelf:"flex-start"}}>
            <App buttonName="Commercial" />
            </div>
          </Auth0Provider>
      </div>
    </div>
  </React.StrictMode>
);
