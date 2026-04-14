export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: 40 }}>NWD Design</h1>
      <p style={{ opacity: 0.7 }}>NextWave AI Design Studio</p>

      <a href="/workspace">
        <button style={{
          marginTop: 20,
          padding: "12px 24px",
          fontSize: 16,
          cursor: "pointer"
        }}>
          Start Designing
        </button>
      </a>
    </div>
  );
}