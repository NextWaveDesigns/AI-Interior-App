type Props = {
  addItem: (type: string) => void;
};

export default function LeftPanel({ addItem }: Props) {
  return (
    <div
      style={{
        width: 200,
        background: "#1e293b",
        color: "white",
        padding: 10
      }}
    >
      <h3>Furniture</h3>

      <button onClick={() => addItem("sofa")}>Sofa</button>
      <button onClick={() => addItem("table")}>Table</button>
      <button onClick={() => addItem("bed")}>Bed</button>
    </div>
  );
}