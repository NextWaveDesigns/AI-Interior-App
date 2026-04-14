type Props = {
  text: string;
};

function parseSections(text: string) {
  const sections = {
    layout: "",
    furniture: "",
    colors: "",
    lighting: "",
    tips: ""
  };

  const lines = text.split("\n");

  let current = "";

  lines.forEach((line) => {
    const lower = line.toLowerCase();

    if (lower.includes("layout")) current = "layout";
    else if (lower.includes("furniture")) current = "furniture";
    else if (lower.includes("color")) current = "colors";
    else if (lower.includes("lighting")) current = "lighting";
    else if (lower.includes("tip")) current = "tips";

    if (current && line.trim() !== "") {
      sections[current] += line + "\n";
    }
  });

  return sections;
}

export default function AIOutput({ text }: Props) {
  if (!text) return null;

  const data = parseSections(text);

  const Card = ({ title, content }: any) => (
    <div
      style={{
        background: "#1e293b",
        padding: 16,
        borderRadius: 10,
        flex: 1,
        minWidth: 250
      }}
    >
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <div style={{ whiteSpace: "pre-wrap", opacity: 0.9 }}>
        {content || "No data"}
      </div>
    </div>
  );

  return (
    <div style={{ marginTop: 30 }}>
      <h2 style={{ marginBottom: 20 }}>AI Design Plan</h2>

      <div
        style={{
          display: "flex",
          gap: 15,
          flexWrap: "wrap"
        }}
      >
        <Card title="Layout" content={data.layout} />
        <Card title="Furniture" content={data.furniture} />
        <Card title="Colors" content={data.colors} />
        <Card title="Lighting" content={data.lighting} />
        <Card title="Optimization Tips" content={data.tips} />
      </div>
    </div>
  );
}