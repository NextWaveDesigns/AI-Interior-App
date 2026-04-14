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
      <h3>Tools</h3>

      <button onClick={() => addItem("sofa")}>Add Sofa</button>
      <button onClick={() => addItem("table")}>Add Table</button>
      <button onClick={() => addItem("bed")}>Add Bed</button>
    </div>
  );
}