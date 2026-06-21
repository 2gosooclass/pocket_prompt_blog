export default function PrivacyPage() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem", maxWidth: "800px" }}>
      <h1 className="gradient-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy Policy</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>
        <p><strong>Last Updated: June 20, 2026</strong></p>

        <p>
          At 2GOSOO AI Prompt Lab ("we", "us", or "our"), accessible from pocketpromptlab.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
        </p>

        <h3 style={{ color: "var(--fg-default)", marginTop: "1rem" }}>Information We Collect</h3>
        <p>
          We collect information to provide better services to all our users. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>

        <h3 style={{ color: "var(--fg-default)", marginTop: "1rem" }}>Log Files</h3>
        <p>
          We follow a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h3 style={{ color: "var(--fg-default)", marginTop: "1rem" }}>Cookies and Web Beacons</h3>
        <p>
          Like any other website, we use "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h3 style={{ color: "var(--fg-default)", marginTop: "1rem" }}>Google AdSense & Third-Party Advertising</h3>
        <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.02)", borderRadius: "8px", borderLeft: "4px solid var(--accent-1)" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "var(--fg-default)", marginBottom: "0.5rem" }}>Important Disclosure Regarding Third-Party Tracking</p>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{ color: "var(--accent-1)" }}>Ads Settings</a>.</li>
          </ul>
        </div>
        <p>
          Our site employs a Consent Management Platform (CMP) to ensure you have full control over your data. Scripts related to analytics and targeted advertising (including Google AdSense) will not execute until you provide explicit consent via our cookie banner.
        </p>

        <h3 style={{ color: "var(--fg-default)", marginTop: "1rem" }}>GDPR Data Protection Rights</h3>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          The right to access, The right to rectification, The right to erasure, The right to restrict processing, The right to object to processing, and The right to data portability.
        </p>
      </div>
    </div>
  );
}
