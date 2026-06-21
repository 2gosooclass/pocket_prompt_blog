export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem", maxWidth: "800px" }}>
      <h1 className="gradient-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>About Us</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>
        <p>
          Welcome to <strong>2GOSOO AI Prompt Lab</strong>. We are an AI creation hub dedicated to bridging the gap between advanced AI technologies and practical, everyday use cases.
        </p>
        <p>
          Our mission is to empower professionals, small business owners, and creators worldwide with high-quality, rigorously tested AI prompts. Whether you are drafting a legal contract, brainstorming marketing strategies, or generating stunning visuals, our curated library ensures you get the "Golden Output" from models like ChatGPT, Claude, and Gemini.
        </p>
        <p>
          We believe in transparency, quality, and the transformative power of AI when guided by human insight. Every prompt in our library is backed by extensive research and real-world testing.
        </p>
        <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--bg-elevated)", borderRadius: "12px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--fg-default)", marginBottom: "0.5rem" }}>Our Commitment</h3>
          <p style={{ margin: 0, fontSize: "0.95rem" }}>
            We adhere strictly to digital quality standards. We do not use programmatic scraping. Every guide, template, and insight published here is hand-crafted to provide genuine value to our global community.
          </p>
        </div>
      </div>
    </div>
  );
}
