import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-o8ea8tzikc0zrjie.us.auth0.com"
      clientId="9lmP5sTdoxpbtq8hy0hc3j89pgqYTHri"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App buttonName="Residential" />
    </Auth0Provider>
    <div style={{ padding: "10px" }}></div>
    <Auth0Provider
      domain="dev-o8ea8tzikc0zrjie.us.auth0.com"
      clientId="gwf2UlWH5njGVh6T8PoyoM8cD7R97igf"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App buttonName="Commercial" />
    </Auth0Provider>
  </React.StrictMode>
);
