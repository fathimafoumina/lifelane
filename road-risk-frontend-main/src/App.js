import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Complaint from "./pages/Complaint";

function App() {
  return (
    <BrowserRouter>
      <div>

        {/* 🔷 NAVBAR */}
        <nav style={styles.navbar}>
          <h2 style={styles.logo}>🚧 Road Risk AI</h2>

          <div>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/upload" style={styles.link}>Upload</Link>
            <Link to="/result" style={styles.link}>Results</Link>
            <Link to="/complaint" style={styles.link}>Complaint</Link>
          </div>
        </nav>

        {/* 🔷 MAIN CONTENT */}
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/result" element={<Result />} />
            <Route path="/complaint" element={<Complaint />} />
          </Routes>
        </div>

        {/* 🔷 FOOTER */}
        <footer style={styles.footer}>
          <p>© 2026 Road Risk Intelligence System</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;


/// 🔥 STYLES (makes it look like a real app)
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e293b",
    padding: "15px 30px",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  },
  container: {
    padding: "30px",
    minHeight: "80vh",
    backgroundColor: "#f1f5f9"
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#1e293b",
    color: "white"
  }
};