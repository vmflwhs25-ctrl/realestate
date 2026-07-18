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
      
      {/* 🎥 교체하신 background.mp4 비디오 배경 */}
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

      {/* 🖤 깊이감 있는 딥 브론즈 다크 필터 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(12, 10, 9, 0.45)', 
        zIndex: -1,
      }} />
      
      {/* 💎 샴페인 골드빛 프라이빗 유리 카드 */}
      <main style={{ 
        maxWidth: '500px', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'rgba(28, 25, 23, 0.45)', 
        padding: '50px 30px', 
        borderRadius: '32px', 
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(217, 119, 6, 0.18)', 
        backdropFilter: 'blur(24px)', 
        WebkitBackdropFilter: 'blur(24px)', 
        border: '1px solid rgba(217, 119, 6, 0.22)', 
        zIndex: 1,
        boxSizing: 'border-box'
      }}>
        
        {/* 상단 럭셔리 라벨 */}
        <p style={{ 
          color: '#D97706', 
          fontWeight: '700', 
          fontSize: '11px', 
          letterSpacing: '5px', 
          margin: '0 0 18px 0',
          textTransform: 'uppercase'
        }}>
          DATA-DRIVEN REAL ESTATE
        </p>
        
        {/* 메인 타이틀 */}
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '300', 
          margin: '0 0 25px 0', 
          lineHeight: '1.4', 
          color: '#F5F5F4' 
        }}>
          검증된 공시 데이터 기반<br />
          <span style={{ fontWeight: '800', color: '#D97706' }}>부동산 10%</span>
        </h1>
        
        {/* 신뢰감을 주는 서론 */}
        <p style={{ 
          color: '#E7E5E4', 
          fontSize: '13.5px', 
          lineHeight: '1.9', 
          margin: '0 0 35px 0', 
          wordBreak: 'keep-all',
          fontWeight: '300'
        }}>
          투자는 감상이나 소문이 아닌 오직 차갑고 객관적인 숫자로 증명되어야 합니다.<br />
          저희 <strong>&apos;부동산 10%&apos;</strong>는 국토교통부 공식 발표와 기관 통계 데이터만을 취합하여, 시장의 가려진 진실을 냉정하게 공유하는 오피니언 리더 세션입니다.
        </p>

        {/* 📊 공시/통계 팩트 기반 메뉴 세션 (전면 리뉴얼) */}
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: 'rgba(12, 10, 9, 0.35)', 
          padding: '24px', 
          borderRadius: '20px', 
          margin: '0 auto 35px auto',
          border: '1px solid rgba(217, 119, 6, 0.1)',
        }}>
          <h2 style={{ fontSize: '12px', color: '#F5F5F4', fontWeight: '700', letterSpacing: '2.5px', textAlign: 'center', margin: '0 0 18px 0' }}>
            [ 3대 핵심 팩트 분석 세션 ]
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#E7E5E4', fontWeight: '700' }}>
                <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
                공식 실거래 트렌드 지표
              </p>
              <p style={{ margin: '0 0 0 16px', fontSize: '11.5px', color: '#A8A29E', lineHeight: '1.6' }}>
                국토교통부 실거래 신고 데이터와 한국부동산원 매매가격지수 원본 지표 필터링 및 왜곡 거래 식별
              </p>
            </div>
            
            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#E7E5E4', fontWeight: '700' }}>
                <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
                정부 고시 및 관보 교차 검증
              </p>
              <p style={{ margin: '0 0 0 16px', fontSize: '11.5px', color: '#A8A29E', lineHeight: '1.6' }}>
                광역교통망(GTX 등) 확정 고시, 시·도 단위 도시계획 조례 및 공공 분양 예정 정보 원문 팩트 확인
              </p>
            </div>

            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#E7E5E4', fontWeight: '700' }}>
                <span style={{ color: '#D97706', marginRight: '6px' }}>•</span>
                상급지 거래 흐름 트래킹
              </p>
              <p style={{ margin: '0 0 0 16px', fontSize: '11.5px', color: '#A8A29E', lineHeight: '1.6' }}>
                KB 부동산 선도아파트 50 지수를 활용하여 수도권 대장주 아파트의 선행 거래 흐름 분석 및 예측 공유
              </p>
            </div>
          </div>
        </div>
{/* 카카오톡 버튼 */}
<div style={{ marginTop: '15px' }}>
  <a 
  href="https://open.kakao.com/o/gGrNacni" 
  target="_blank" 
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "openchat_click", {
        event_category: "button",
        event_label: "프라이빗 데이터 정보방 입장",
      });
    }
  }}
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
    프라이빗 데이터 정보방 입장 💬
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
        © 2026 REAL ESTATE 10%. All rights reserved.<br />
        본 채널에서 가공하여 제공하는 정보는 오직 팩트 데이터와 공식 문헌에 근거합니다.
      </footer>
    </div>
  );
}