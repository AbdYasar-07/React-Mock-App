import "./Header/Header.css";

interface Props {
  errorMessage: string;
  errorTitle: string;
}

function ErrorCard({ errorMessage, errorTitle }: Props) {
  return (
    <div className="center" style={{ padding: "10px" }}>
      <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Error</div>
        <div className="card-body text-danger">
          <h5 className="card-title">{errorTitle}</h5>
          <p className="card-text">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorCard;
