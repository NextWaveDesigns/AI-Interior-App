+"use client";
+
+import
{ useWorkspaceStore } from
+
../../s
texport default function Workspace() {
+
const { prompt, setPrompt, generateAI,
I
+
+
+
return (
‹div style={{ padding: 20 }}>
+
<h2>NWD Workspace</h2>
+
+
‹textarea
+
+
+
value={prompt}
onChange={(e) = setPrompt(e.targe
style={{ width: "100%", height: 10
+
+
+
+
<button onClick={generateAI}>Generat
+
<pre>{response:</pre>
+
</div>
+
+}