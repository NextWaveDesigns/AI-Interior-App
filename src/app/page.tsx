import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>NWD Design</h1>
      <p>NextWave AI Design Studio</p>

      <Link href="/workspace">
        <button>Enter Workspace</button>
      </Link>
    </div>
  );
}