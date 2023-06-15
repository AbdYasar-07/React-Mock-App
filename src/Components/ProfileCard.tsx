import { User } from "@auth0/auth0-react";

interface Props {
  user?: User;
}

function ProfileCard({ user }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
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
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
