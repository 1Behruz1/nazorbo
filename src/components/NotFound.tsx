import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontSize: "1.5rem",
  }}
>
  <img width={720} height={476} src="/not-found.png" alt="not-found" />
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "72px",
      gap: "1rem",
    }}
  >
    <button
      onClick={() => navigate("/")}
      style={{
        width: "260px",
        height: "40px",
        border: "2px solid transparent",
        backgroundColor: "#7c3aed",
        borderRadius: "0.375rem",
        fontWeight: "500",
        fontSize: "1rem",
        color: "#fefefe",
        padding: "0.375rem 4rem",
        transition: "background-color 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#6d28d9")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#7c3aed")
      }
      onFocus={(e) => {
        e.currentTarget.style.outline = "none";
        e.currentTarget.style.boxShadow = "0 0 0 2px #8b5cf6";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Go Home Page
    </button>

    <button
      onClick={() => window.location.reload()}
      style={{
        width: "260px",
        height: "40px",
        backgroundColor: "transparent",
        border: "2px solid #7c3aed",
        borderRadius: "0.375rem",
        fontWeight: "500",
        fontSize: "1rem",
        color: "#7c3aed",
        padding: "0.375rem 4rem",
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "none";
        e.currentTarget.style.boxShadow = "0 0 0 2px #8b5cf6";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Reload Page
    </button>
  </div>
</div>

  );
};

export default NotFound;
