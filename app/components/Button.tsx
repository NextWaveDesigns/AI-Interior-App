type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
};

export default function Button({ children, onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "#22c55e",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontWeight: "bold",
        opacity: loading ? 0.6 : 1
      }}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}