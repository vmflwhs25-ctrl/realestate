// app/page.tsx
export default function Home() {
  return (
    <div style={{ 
      margin: 0,
      padding: 0,
      fontFamily: '"Helvetica Neue", Helvetica, Arial, "Malgun Gothic", sans-serif', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F8FAFC',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 20px',
      letterSpacing: '-0.5px'
    }}>
      
      {/* 🎥 하이엔드 야경 비디오 배경 */}
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

      {/* 🖤 고급스러운 브론즈 빛이 도는 럭셔리 다크 필터 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(12, 10, 9, 0.45)', // 따뜻하고 깊이감 있는 딥 브론즈톤 어두움
        zIndex: -1,
      }} />
      
      {/* 💎 럭셔리 부티크 스타일의 슬림 샴페인 골드 유리 카드 */}
      <main style={{ 
        maxWidth: '480px', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'rgba(28, 25, 23, 0.4)', // 고급 자재 느낌의 스톤 카본 브라운 투명
        padding: '50px 30px', 
        borderRadius: '32px', 
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(217, 119, 6, 0.15)', // 브론즈 골드 미세 반사광
        backdropFilter: 'blur(24px)', 
        WebkitBackdropFilter: 'blur(24px)', 
        border: '1px solid rgba(217, 119, 6, 0.2)', // 은은하게 빛나는 골드 테두리 line
        zIndex: 1,
        boxSizing: 'border-box'
      }}>
        
        {/* 최고급 부티크 에디션 넘버 */}
        <p style={{ 
          color: '#D97706', // 럭셔리 골드 브라운
          fontWeight: '700', 
          fontSize: '11px', 
          letterSpacing: '5px', 
          margin: '0 0 18px 0',
          textTransform: 'uppercase'
        }}>
          Premium Private Session
        </p>
        
        {/* 타이틀: 신뢰도 높은 절제미 */}
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '300', // 가볍고 고급스러운 굵기 대비
          margin: '0 0 25px 0', 
          lineHeight: '1.4', 
          color: '#F5F5F4' 
        }}>
          통계와 공시 지표 기반<br />
          <span style={{ fontWeight: '800', color: '#D97706' }}>부동산 10%</span>
        </h1>
        
        {/* 서술형 정돈 텍스트 */}
        <p style={{ 
          color: '#E7E5E4', 
          fontSize: '13.5px', 
          lineHeight: '1.9', 
          margin: '0 0 35px 0', 
          wordBreak: 'keep-all',
          fontWeight: '300'
        }}>
          불확실성이 높은 시기일수록 감정을 철저히 배제해야 합니다.<br />
          저희 <strong>&apos;부동산 10%&apos;</strong>는 국토교통부 공식 고시 및 객관적 거래 통계 추이만을 집계하여 냉정하게 분석을 공유하는 비공개 멤버십 채널입니다.
        </p>

        {/* 미니멀 브론즈 보드 (불필요한 글씨 정리) */}
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: 'rgba(12, 10, 9, 0.3)', 
          padding: '24px', 
          borderRadius: '20px', 
          margin: '0 auto 35px auto',
          border: '1px solid rgba(217, 119, 6, 0.08)',
        }}>
          <h2 style={{ fontSize: '13px', color: '#F5F5F4', fontWeight: '700', letterSpacing: '2px', textAlign: 'center', margin: '0 0 15px 0' }}>
            [ CHANNEL KEY SESSION ]
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#A8A29E', lineHeight: '1.6' }}>
              <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
              <strong style={{ color: '#E7E5E4' }}>주간 마켓 프리뷰</strong> | KB 리브 실거래 추이 심층 분석
            </p>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#A8A29E', lineHeight: '1.6' }}>
              <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
              <strong style={{ color: '#E7E5E4' }}>국토부 고시 요약</strong> | 개발 고시 및 공식 교통 계획 팩트 체크
            </p>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#A8A29E', lineHeight: '1.6' }}>
              <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
              <strong style={{ color: '#E7E5E4' }}>프라이빗 세미나</strong> | 상호 신뢰 기반의 정보 피드백 교류
            </p>
          </div>
        </div>

        {/* 카카오톡 버튼 (가독성을 위해 옐로우를 유지하되 골드 섀도우 추가) */}
        <div style={{ marginTop: '15px' }}>
          <a 
            href="https://open.kakao.com/..." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'block', 
              backgroundColor: '#FEE500', 
              color: '#1C1917', 
              padding: '16px 0', 
              borderRadius: '16px', 
              fontSize: '15px', 
              fontWeight: '700', 
              textDecoration: 'none', 
              boxShadow: '0 12px 30px rgba(254, 229, 0, 0.15)', 
              letterSpacing: '-0.3px',
              width: '100%'
            }}
          >
            카카오톡 프리빗 룸 입장하기 💬
          </a>
        </div>

      </main>

      {/* 푸터 */}
      <footer style={{ 
        marginTop: '40px', 
        color: 'rgba(231, 229, 228, 0.25)', 
        fontSize: '10.5px', 
        textAlign: 'center', 
        lineHeight: '1.8', 
        zIndex: 1,
        letterSpacing: '0.5px' 
      }}>
        © 2026 REAL ESTATE 10%. All rights reserved.
      </footer>
    </div>
  );
}