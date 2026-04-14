type Props = {
  value: string;
  onChange: (val: string) => void;
  options: string[];
};

export default function Select({ value, onChange, options }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: 10,
        borderRadius: 6,
        border: "none"
      }}
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}