type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function TextArea({ value, onChange, placeholder }: Props) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        height: 100,
        padding: 10,
        borderRadius: 6,
        border: "none"
      }}
    />
  );
}