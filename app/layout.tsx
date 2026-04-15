import "./globals.css";

export const metadata = {
  title: "NWD Design",
  description: "NextWave AI Design Studio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          background: "#0f172a",
          color: "white",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        {/* APP ROOT */}
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}