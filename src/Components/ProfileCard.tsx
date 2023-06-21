import { User } from "@auth0/auth0-react";

interface Props {
  user?: User;
  buttonName? : string;
}

function ProfileCard({ user, buttonName }: Props) {

  const url = `https://carrier.com.ph/${buttonName}`

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position:"fixed",
        top:"20%",
        left:"40%"
      }}
    >
      <div className="card">
        <img
          className="card-img-top"
          style={{ width: "258px", marginLeft: "15px", padding: "10px" }}
          src={user?.picture}
          alt={user?.nickname + " " + "picture"}
        />
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">{user?.sub}</p>
          {}
          <a href={url} target="_blank" className="btn btn-primary">
            Go to {buttonName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
