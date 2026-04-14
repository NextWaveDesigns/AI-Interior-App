type Props = {
  input: string;
  setInput: (val: string) => void;
  generate: () => void;
  output: string;
  loading: boolean;
};

export default function RightPanel({
  input,
  setInput,
  generate,
  output,
  loading
}: Props) {
  return (
    <div
      style={{
        width: 300,
        background: "#0f172a",
        color: "white",
        padding: 15
      }}
    >
      <h3>AI Designer</h3>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <button onClick={generate} style={{ marginTop: 10 }}>
        {loading ? "Designing..." : "Generate"}
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {output}
      </pre>
    </div>
  );
}