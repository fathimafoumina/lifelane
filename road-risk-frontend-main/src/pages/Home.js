import roadImg from "../assets/road.jpg";

function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        {/* LEFT SIDE TEXT */}
        <div>
          <h1 style={styles.title}>
            AI-Powered Road Risk <br /> Intelligence
          </h1>

          <p style={styles.desc}>
            Smart system that detects dangerous road conditions and improves driver safety using AI.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img src={roadImg} alt="road" style={styles.image} />

      </div>

      {/* CARDS SECTION */}
      <div style={styles.cards}>

        <div style={styles.card}>
          <h3>📷 Upload Road Image</h3>
          <input type="file" />
          <button style={styles.button}>Upload</button>
        </div>

        <div style={styles.card}>
          <h3>⚠ Road Risk Result</h3>
          <h2 style={{ color: "red" }}>Risk Level: Medium</h2>
          <p>Drive carefully in this area.</p>
        </div>

        <div style={styles.card}>
          <h3>📝 Report Road Issue</h3>
          <input placeholder="Enter location" />
          <textarea placeholder="Describe problem"></textarea>
          <button style={styles.button}>Submit</button>
        </div>

      </div>

    </div>
  );
}

export default Home;

const styles = {
  container: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
    padding: "40px"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: "50px",
    marginBottom: "10px"
  },

  desc: {
    color: "#cbd5e1",
    maxWidth: "400px"
  },

  image: {
    width: "400px",
    borderRadius: "10px"
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px"
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "250px"
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};