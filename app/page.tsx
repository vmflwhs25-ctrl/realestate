// app/page.tsx
export default function Home() {
  return (
    <div style={{ 
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      
      {/* 1단계에서 넣은 background.mp4 비디오가 배경으로 실행됩니다 */}
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

      {/* 영상 뒤에 글씨가 묻히지 않도록 어둡게 눌러주는 반투명 필터 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(10, 15, 30, 0.82)', 
        zIndex: -1,
      }} />
      
      {/* 중앙 메인 안내 상자 */}
      <main style={{ 
        maxWidth: '620px', 
        width: '90%', 
        textAlign: 'center', 
        backgroundColor: 'rgba(15, 23, 42, 0.65)', 
        padding: '50px 35px', 
        borderRadius: '24px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(12px)', 
        border: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 1
      }}>
        
        {/* 상단 서브 타이틀 */}
        <p style={{ color: '#94A3B8', fontWeight: '600', fontSize: '13px', letterSpacing: '3px', margin: '0 0 15px 0' }}>
          ESTABLISHED DATA ANALYSIS
        </p>
        
        {/* 메인 타이틀 */}
        <h1 style={{ fontSize: '34px', fontWeight: '800', margin: '0 0 25px 0', lineHeight: '1.4', letterSpacing: '-1px' }}>
          객관적 지표와 통계 기반<br />
          <span style={{ color: '#3B82F6' }}>부동산 10%</span>
        </h1>
        
        {/* 설명 멘트 (신뢰감을 주는 전문적인 톤) */}
        <p style={{ color: '#D1D5DB', fontSize: '15px', lineHeight: '1.75', margin: '0 0 35px 0', textAlign: 'justify', textJustify: 'inter-word' }}>
          부동산 시장의 불확실성이 커질수록 감정에 의존한 판단은 리스크를 키웁니다. 
          저희 <strong>'부동산 10%'</strong>는 거시경제 동향, 실거래 통계 추이, 그리고 공식 정부 고시 자료만을 바탕으로 시장을 냉정하게 분석합니다. 
          상호 신뢰를 바탕으로 한 정보 교류와 시장 전망을 공유하기 위해 카카오톡 오픈채팅방을 개설하여 운영하고 있습니다.
        </p>

        {/* 정보방 주요 공유 영역 */}
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: 'rgba(255, 255, 255, 0.03)', 
          padding: '25px', 
          borderRadius: '16px', 
          margin: '0 auto 35px auto',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <h3 style={{ fontSize: '16px', color: '#F8FAFC', margin: '0 0 15px 0', fontWeight: 'bold', textAlign: 'center' }}>
            [ 주요 분석 및 공유 세션 ]
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#94A3B8', lineHeight: '1.6' }}>
            ▪️ <strong style={{ color: '#E2E8F0' }}>주간 시장 브리핑:</strong> KB시세 및 한국부동산원 데이터 기반 지역 동향 분석
          </p>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#94A3B8', lineHeight: '1.6' }}>
            ▪️ <strong style={{ color: '#E2E8F0' }}>고시 정보 요약:</strong> 국토부 및 지자체 개발 계획, 교통망 확정안 팩트 체크
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#94A3B8', lineHeight: '1.6' }}>
            ▪️ <strong style={{ color: '#E2E8F0' }}>사례 분석 세미나:</strong> 회원 간 실전 거래 성공 및 실패 사례 피드백 공유
          </p>
        </div>

        {/* 냉정한 자가진단 문구 */}
        <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 30px 0', lineHeight: '1.6' }}>
          근거 없는 소문이나 조급함에 쫓겨 의사결정을 내리고 계시지는 않습니까?<br />
          냉정한 데이터 검증을 통해 투자의 리스크를 최소화하시기 바랍니다.
        </p>

        {/* 카카오톡 바로 입장 버튼 (비밀번호 받기 문구 삭제) */}
        <div style={{ marginTop: '20px' }}>
          {/* 🔗 나중에 실제 오픈채팅 링크 주소가 생기면 "https://open.kakao.com/..." 부분을 본인 링크로 바꿔주세요! */}
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
              fontSize: '17px', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
              transition: 'all 0.3s ease',
              width: '100%'
            }}
          >
            카카오톡 오픈채팅방 바로 입장하기 💬
          </a>
        </div>

      </main>

      {/* 하단 푸터 */}
      <footer style={{ marginTop: '40px', color: 'rgba(255, 255, 255, 0.3)', fontSize: '11px', textAlign: 'center', lineHeight: '1.6' }}>
        © 2026 부동산 10%. All rights reserved.<br />
        본 채널에서 제공하는 정보는 참고용이며, 최종 투자 의사 결정과 책임은 투자자 본인에게 있습니다.
      </footer>
    </div>
  );
}