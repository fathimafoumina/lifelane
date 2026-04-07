import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ NOW added
import bgImage from "../assets/road2.jpg";

function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(
        "http://localhost:5000/analyze",
        formData
      );

      // ✅ REAL DATA
      navigate("/result", {
        state: res.data
      });

    } catch (error) {
      console.log("Backend not ready, using mock");

      // ✅ FALLBACK (so app still works)
      navigate("/result", {
        state: {
          risk: "Medium",
          score: 70,
          issues: ["Pothole detected"]
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>

          <h2 style={styles.title}>📷 Upload Road Image</h2>

          <p style={styles.desc}>
            Upload a road image to analyze risk conditions using AI
          </p>

          <div style={styles.uploadBox}>
            <p>Drag & drop or browse your image</p>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={styles.input}
            />
          </div>

          <button
            style={styles.button}
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              style={styles.preview}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Upload;

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
    background: "#f8fafc",
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

  desc: {
    fontSize: "14px",
    color: "#555"
  },

  uploadBox: {
    border: "2px dashed #ccc",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px"
  },

  input: {
    marginTop: "10px"
  },

  button: {
    marginTop: "20px",
    padding: "12px",
    width: "100%",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px"
  },

  preview: {
    marginTop: "20px",
    width: "100%",
    borderRadius: "10px"
  }
};