import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        background: "#3f5997",
      }}
    >
      <div>
        <a className="navbar-brand ps-5 name">
          <img
            src="https://images.carriercms.com/image/upload/v1629825291/common/logos-svg/carrier-logo.svg"
            style={{ width: "100px", height: "60px" }}
          ></img>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Auth0Provider
          domain="dev-34chvqyi4i2beker.jp.auth0.com"
          clientId="BFVFsiNyByBt0wc1HBXGSzTcrywxqR82" // Dev1 Parts & Service
          authorizationParams={{
            useRefreshTokens: true,
            redirect_uri: window.location.origin,
            ignoreCache: true,
            audience: "https://dev-34chvqyi4i2beker.jp.auth0.com/api/v2/",
            organization: "org_4UAey1mek2Dm0ZCZ", // Dev1 Concepcion Organization
          }}
        >
          <div
            // style={{
            //   marginRight: "30px",
            //   borderRight: "solid 2px #ccc",
            //   alignSelf: "flex-start",
            // }}
          >
            <App buttonName="Parts & Service" />
          </div>
        </Auth0Provider>

        {/* <Auth0Provider
          domain="dev-34chvqyi4i2beker.jp.auth0.com"
          clientId="bmMx1zttHaZWObU6oMioca4nBxjz9R3k"
          authorizationParams={{
            useRefreshTokens: true,
            redirect_uri: window.location.origin,
            ignoreCache: true,
            audience: "https://dev-34chvqyi4i2beker.jp.auth0.com/api/v2/",
          }}
        >
          <div style={{ marginLeft: "10px", alignSelf: "flex-start" }}>
            <App buttonName="Commercial" />
          </div>
        </Auth0Provider> */}
      </div>
    </div>
  </React.StrictMode>
);
