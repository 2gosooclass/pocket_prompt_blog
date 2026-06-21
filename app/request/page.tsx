import React from "react";
import Link from "next/link";
import { MessageSquare, Sparkles, Zap, Image as ImageIcon, Video } from "lucide-react";

export const metadata = {
  title: "프롬프트 제작 의뢰",
  description: "2GOSOO AI Prompt Lab에 맞춤형 프롬프트 제작을 의뢰하세요. 이미지, 영상, 업무 자동화 등 무엇이든 만들어 드립니다.",
};

export default function RequestPage() {
  return (
    <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 className="gradient-text" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          원하는 프롬프트가 없나요?<br/>우리가 직접 깎아드립니다.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--fg-subtle)", lineHeight: 1.6 }}>
          머릿속에 있는 아이디어를 현실로 만들어 줄 완벽한 프롬프트가 필요하신가요?<br/>
          이미지, 영상, 웹사이트, 업무 자동화 봇까지 무엇이든 의뢰해 주세요!
        </p>
      </div>

      <div className="glass-card" style={{ padding: "2.5rem", marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        
        <div>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--fg)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Sparkles size={20} color="var(--primary-500)" /> 이렇게 의뢰해 주세요!
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-elevated)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <div style={{ background: "rgba(99,102,241,0.1)", padding: "0.8rem", borderRadius: "50%", color: "var(--primary-500)" }}>
                <ImageIcon size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>어떤 결과물이 필요한지 알려주세요</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--fg-subtle)" }}>예: "쇼핑몰 상세페이지에 쓸 고급스러운 화장품 3D 렌더링 프롬프트 만들어주세요", "유튜브 브이로그용 시네마틱 B-roll 영상 프롬프트 필요해요"</p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-elevated)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <div style={{ background: "rgba(239,68,68,0.1)", padding: "0.8rem", borderRadius: "50%", color: "#ef4444" }}>
                <Video size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>유튜브 커뮤니티에 댓글로 신청!</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--fg-subtle)" }}>2GOSOO Prompt Lab의 공식 유튜브 채널 **커뮤니티 게시글**에 댓글을 달아주시면, 저희가 확인 후 직접 제작해 드립니다.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-elevated)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <div style={{ background: "rgba(16,185,129,0.1)", padding: "0.8rem", borderRadius: "50%", color: "#10b981" }}>
                <Zap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>제작 완료 후 쇼츠로 결과물 확인</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--fg-subtle)" }}>제작된 프롬프트는 검증된 결과물 영상과 함께 유튜브 쇼츠 및 이곳 웹사이트 라이브러리에 업로드됩니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--fg-muted)", marginBottom: "1.5rem" }}>
            지금 바로 유튜브에서 의뢰를 남겨보세요 👇
          </p>
          <a 
            href="https://www.youtube.com/@2gosoopromptlab/community" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary" 
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", fontSize: "1.1rem", textDecoration: "none" }}
          >
            <MessageSquare size={20} /> 유튜브 커뮤니티로 가기
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link href="/" style={{ color: "var(--fg-muted)", textDecoration: "none", fontSize: "0.9rem", borderBottom: "1px solid var(--border)", paddingBottom: "2px" }}>
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
