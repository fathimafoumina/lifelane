import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/road2.jpg";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {
    risk: "Medium",
    score: 65,
    issues: ["Pothole detected", "Poor lighting"]
  };

  return (
    <div style={styles.container}>

      <div style={styles.overlay}>

        <div style={styles.card}>

          <h2 style={styles.title}>🚧 Road Risk Analysis</h2>

          {/* RISK BADGE */}
          <div style={styles.badge(data.risk)}>
            {data.risk} Risk
          </div>

          {/* SCORE */}
          <div style={styles.scoreBox}>
            <h3>Risk Score</h3>
            <h1>{data.score}%</h1>
          </div>

          {/* ISSUES */}
          <div style={styles.section}>
            <h4>Detected Issues</h4>
            <ul>
              {data.issues.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* MESSAGE */}
          <div style={styles.messageBox(data.risk)}>
            {getMessage(data.risk)}
          </div>

          <button style={styles.button} onClick={() => navigate("/")}>
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;

/* ---------- HELPERS ---------- */

function getMessage(risk) {
  if (risk === "High") return "⚠ High accident risk! Drive carefully.";
  if (risk === "Medium") return "⚠ Moderate risk. Stay alert.";
  return "✅ Safe road conditions.";
}

/* ---------- STYLES ---------- */

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  overlay: {
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px" // prevents overflow
  },

  card: {
    background: "#f8fcf5", // softer white
    padding: "20px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "350px", // FIX: prevents large box
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
  },

  title: {
    marginBottom: "10px"
  },

  badge: (risk) => ({
    padding: "8px",
    borderRadius: "20px",
    color: "white",
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize: "14px",
    background:
      risk === "High"
        ? "#ef4444"
        : risk === "Medium"
        ? "#f59e0b"
        : "#22c55e"
  }),

  scoreBox: {
    background: "#e2e8f0",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px"
  },

  section: {
    textAlign: "left",
    marginBottom: "15px",
    fontSize: "14px"
  },

  messageBox: (risk) => ({
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "14px",
    background:
      risk === "High"
        ? "#fee2e2"
        : risk === "Medium"
        ? "#fef3c7"
        : "#dcfce7",
    color:
      risk === "High"
        ? "#b91c1c"
        : risk === "Medium"
        ? "#92400e"
        : "#166534"
  }),

  button: {
    padding: "10px",
    width: "100%",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

