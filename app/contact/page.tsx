export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem", maxWidth: "800px" }}>
      <h1 className="gradient-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Us</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>
        <p>
          We value your feedback and inquiries. Whether you have a question about our prompt library, wish to report an issue, or want to explore business partnerships, our team is ready to assist you.
        </p>
        <div style={{ padding: "2rem", background: "var(--bg-elevated)", borderRadius: "12px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--fg-default)", marginBottom: "1rem" }}>Get in Touch</h3>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li><strong>Email:</strong> support@pocketpromptlab.com, 2gosoo@gmail.com</li>
            <li><strong>Business Inquiries:</strong> business@pocketpromptlab.com</li>
            <li><strong>Operating Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (KST)</li>
          </ul>
        </div>
        <p style={{ fontSize: "0.9rem" }}>
          * We strive to respond to all inquiries within 48 hours. Please ensure you provide a valid return email address.
        </p>
      </div>
    </div>
  );
}
