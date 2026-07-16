// app/page.tsx
export default function Home() {
  return (
    <div style={{ 
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 20px'
    }}>
      
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(5, 8, 16, 0.45)', 
        zIndex: -1,
      }} />
      
      <main style={{ 
        maxWidth: '500px', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'rgba(15, 23, 42, 0.35)', 
        padding: '40px 25px', 
        borderRadius: '24px', 
        boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)', 
        border: '1px solid rgba(255, 255, 255, 0.15)', 
        zIndex: 1,
        boxSizing: 'border-box'
      }}>
        
        <p style={{ color: '#60A5FA', fontWeight: '800', fontSize: '11px', letterSpacing: '4px', margin: '0 0 12px 0' }}>
          REAL ESTATE 10%
        </p>
        
        <h1 style={{ fontSize: '30px', fontWeight: '800', margin: '0 0 20px 0', lineHeight: '1.4', letterSpacing: '-1px' }}>
          객관적 지표와 통계 기반<br />
          <span style={{ color: '#3B82F6' }}>부동산 10%</span>
        </h1>
        
        <p style={{ color: '#F1F5F9', fontSize: '14px', lineHeight: '1.8', margin: '0 0 30px 0', wordBreak: 'keep-all' }}>
          시장 불확실성이 커질수록 감정에 의존한 판단은 리스크를 키웁니다.<br />
          저희 <strong>&apos;부동산 10%&apos;</strong>는 공식 정부 고시 자료와 실거래 데이터를 기반으로 시장을 냉정하게 분석하며, 상호 신뢰 기반의 교류를 위해 오픈채팅방을 공유하고 있습니다.
        </p>

        <div style={{ 
          textAlign: 'left', 
          backgroundColor: 'rgba(255, 255, 255, 0.01)', 
          padding: '20px 22px', 
          borderRadius: '16px', 
          margin: '0 auto 30px auto',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#E2E8F0', lineHeight: '1.5' }}>
            ▪️ <strong>주간 브리핑:</strong> 시세 자료 기반 지역 동향 분석
          </p>
          <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#E2E8F0', lineHeight: '1.5' }}>
            ▪️ <strong>고시 요약:</strong> 국토부 및 지자체 개발 계획 팩트 체크
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: '#E2E8F0', lineHeight: '1.5' }}>
            ▪️ <strong>세미나:</strong> 회원 간 실전 거래 사례 피드백 교류
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <a 
            href="https://open.kakao.com/..." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'block', 
              backgroundColor: '#FEE500', 
              color: '#1A1A1C', 
              padding: '16px 0', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              boxShadow: '0 10px 25px rgba(254, 229, 0, 0.25)', 
              width: '100%'
            }}
          >
            카카오톡 오픈채팅방 바로 입장하기 💬
          </a>
        </div>

      </main>

      <footer style={{ marginTop: '30px', color: 'rgba(255, 255, 255, 0.25)', fontSize: '11px', textAlign: 'center', lineHeight: '1.6', zIndex: 1 }}>
        © 2026 부동산 10%. All rights reserved.
      </footer>
    </div>
  );
}