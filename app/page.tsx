// app/page.tsx
export default function Home() {
  return (
    <div style={{ 
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif', 
      minHeight: '100vh',
      // 전체 화면에 웅장하고 화려한 프리미엄 아파트 야경 이미지를 배경으로 설정
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      
      {/* 메인 컨텐츠 컨테이너 */}
      <main style={{ 
        maxWidth: '650px', 
        width: '90%', 
        textAlign: 'center', 
        backgroundColor: 'rgba(15, 23, 42, 0.75)', // 반투명한 다크 블루블랙 카드 효과
        padding: '50px 30px', 
        borderRadius: '30px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)', // 뒷배경 흐리게 처리하는 고급 효과
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* VVIP 타이틀 */}
        <p style={{ color: '#FEE500', fontWeight: 'bold', fontSize: '15px', letterSpacing: '3px', margin: '0 0 15px 0' }}>
          👑 PREMIUM REAL ESTATE 10%
        </p>
        
        <h1 style={{ fontSize: '38px', fontWeight: '900', margin: '0 0 20px 0', lineHeight: '1.4', letterSpacing: '-1px' }}>
          감이 아닌 데이터 기반<br />
          <span style={{ color: '#FEE500', borderBottom: '3px solid #FEE500', pb: '4px' }}>부동산 10%</span>
        </h1>
        
        <p style={{ color: '#E5E7EB', fontSize: '16px', lineHeight: '1.7', margin: '0 0 35px 0' }}>
          대한민국 상위 10%만 조용히 공유하는 실시간 비공개 호재 정보.<br />
          더 이상 유료 강의나 가짜 뉴스에 속지 마세요.<br />
          <strong style={{ color: '#FEE500' }}>오직 카카오톡 오픈채팅방에서만 100% 무료공개</strong>합니다. 💬
        </p>

        {/* 핵심 혜택 리스트 */}
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          padding: '25px', 
          borderRadius: '20px', 
          margin: '0 auto 40px auto',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <h3 style={{ fontSize: '18px', color: '#FEE500', margin: '0 0 15px 0', fontWeight: 'bold', textAlign: 'center' }}>
            💛 오픈채팅 참여 즉시 제공 혜택 💛
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#F3F4F6', lineHeight: '1.5' }}>
            ⚡ <strong>실시간 초급매 알림:</strong> 네이버 부동산보다 빠른 무피/마피 분양권 공유
          </p>
          <p style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#F3F4F6', lineHeight: '1.5' }}>
            📍 <strong>비공개 호재 분석:</strong> 교통 계획 및 정부 고시 기반 진짜 호재 선별
          </p>
          <p style={{ margin: 0, fontSize: '15px', color: '#F3F4F6', lineHeight: '1.5' }}>
            🔥 <strong>고수들의 1:1 Q&A:</strong> 실전 투자자들과 소통하며 내 부동산 진단
          </p>
        </div>

        {/* 불안 심리 자극 자가진단 */}
        <p style={{ color: '#9CA3AF', fontSize: '14px', fontStyle: 'italic', margin: '0 0 30px 0', lineHeight: '1.6' }}>
          "남들 다 산다고 불안해서 나도 무작정 따라 산다?" 🤔<br />
          명확한 기준이 없는 매매는 결국 손실로 이어집니다.<br />
          지금 바로 검증된 데이터 분석방에서 답을 찾으세요!
        </p>

        {/* 메인 버튼 (오픈채팅 참여) */}
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#FEE500', margin: '0 0 10px 0' }}>
            🚨 정원 초과로 곧 마감됩니다 (무료 입장) 🚨
          </p>
          
          {/* 실제 오픈채팅 주소가 생기면 "https://open.kakao.com/..." 부분을 수정해 주세요! */}
          <a 
            href="https://open.kakao.com/..." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', 
              backgroundColor: '#FEE500', 
              color: '#1A1A1C', 
              padding: '18px 45px', 
              borderRadius: '50px', 
              fontSize: '19px', 
              fontWeight: '900', 
              textDecoration: 'none', 
              boxShadow: '0 10px 30px rgba(254, 229, 0, 0.4)', 
              transition: 'all 0.3s ease',
              width: '80%'
            }}
          >
            카톡방 입장 비밀번호 받기 💬💛
          </a>
        </div>

      </main>

      {/* 심플 푸터 */}
      <footer style={{ marginTop: '40px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px', textAlign: 'center' }}>
        © 2026 부동산 10%. All rights reserved.<br />
        본 페이지는 개인 정보 교류 및 분석 데이터 공유를 위한 공간입니다.
      </footer>
    </div>
  );
}