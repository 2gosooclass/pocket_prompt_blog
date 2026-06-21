"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      left: "20px",
      right: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      background: "var(--bg-elevated)",
      border: "1px solid var(--border)",
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: "var(--shadow-lg)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)"
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>🍪 쿠키 및 개인정보 수집 동의</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--fg-subtle)", margin: 0, lineHeight: 1.5 }}>
          본 웹사이트는 사용자 경험 최적화 및 맞춤형 광고 제공(Google AdSense)을 위해 쿠키를 사용합니다. 
          사이트를 계속 이용하시면 쿠키 사용에 동의하시게 됩니다. 자세한 내용은 <Link href="/privacy" style={{ color: "var(--primary-500)", textDecoration: "underline" }}>개인정보처리방침</Link>을 확인해주세요.
        </p>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
        <button onClick={handleDecline} style={{ padding: "0.6rem 1.2rem", borderRadius: "8px", border: "1px solid var(--border)", background: "transparent", color: "var(--fg-muted)", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
          필수 쿠키만 허용
        </button>
        <button onClick={handleAccept} className="btn-primary" style={{ padding: "0.6rem 1.2rem", border: "none", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
          모두 동의
        </button>
      </div>
    </div>
  );
}
