import { useState } from "react";
import bgImage from "../assets/road2.jpg";

function Complaint() {
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");

  // ✅ ADD THIS FUNCTION
  const handleSubmit = () => {
    if (!location || !desc) {
      alert("Please fill all fields");
      return;
    }

    alert("Complaint submitted successfully");

    // clear inputs
    setLocation("");
    setDesc("");
  };

  return (
    <div style={styles.container}>

      <div style={styles.overlay}>

        <div style={styles.card}>

          <h2 style={styles.title}>📝 Report Road Issue</h2>

          <p style={styles.descText}>
            Help improve road safety by reporting issues
          </p>

          {/* LOCATION */}
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Describe the problem"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={styles.textarea}
          />

          {/* ✅ FIXED BUTTON */}
          <button style={styles.button} onClick={handleSubmit}>
            Submit Complaint
          </button>

        </div>

      </div>

    </div>
  );
}

export default Complaint;

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
    padding: "20px"
  },

  card: {
    background: "#ede4e3",
    padding: "20px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "350px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
  },

  title: {
    marginBottom: "10px"
  },

  descText: {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#555"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px"
  },

  button: {
    padding: "10px",
    width: "100%",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};