// app/page.tsx
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      
      {/* 1. 어두운 헤더 섹션 (카카오톡 오픈채팅 강조) */}
      <header style={{ backgroundColor: '#0B0F19', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: '#FEE500', fontWeight: 'bold', fontSize: '18px', letterSpacing: '2px', marginBottom: '10px' }}>
          ★ KAKAO TALK VVIP ROOM ★
        </p>
        <h1 style={{ fontSize: '42px', fontWeight: 'extrabold', margin: '10px 0 20px 0', lineHeight: '1.3', color: '#FFFFFF' }}>
          감이 아닌,<br />데이터 기반 <span style={{ color: '#FEE500' }}>부동산 10%</span>
        </h1>
        <p style={{ color: '#9CA3AF', maxWidth: '650px', margin: '0 auto 35px auto', fontSize: '17px', lineHeight: '1.6' }}>
          대한민국 상위 10%만 아는 비공개 호재 정보와 실거래 분석 리포트.<br />
          더 이상 유료 강의에 속지 마세요. <strong>오직 오픈채팅방에서만 100% 무료 공개</strong>합니다.
        </p>
        {/* 실제 카카오톡 오픈채팅 주소 링크를 href 안에 넣어주세요! */}
        <a 
          href="https://open.kakao.com/o/gGrNacni" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: '#FEE500', color: '#1A1A1C', border: 'none', padding: '16px 40px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 20px rgba(254, 229, 0, 0.4)', transition: 'all 0.3s' }}
        >
          🟡 부동산 10% 오픈채팅방 입장하기 (무료)
        </a>
      </header>

      {/* 2. 최고급 아파트 사진 & 왜 오픈채팅인가? 설명 카드 */}
      <section style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'stretch' }}>
        
        {/* 화려한 현대식 고급 아파트 전경 이미지 */}
        <div style={{ flex: '1.2', minWidth: '320px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80" 
            alt="최고급 현대식 아파트 전경" 
            style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }}
          />
          {/* 이미지 위 그라데이션 오버레이 */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '30px', color: 'white' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>REALESTATE 10%</h3>
            <p style={{ margin: '5px 0 0 0', color: '#FEE500', fontSize: '14px', fontWeight: 'bold' }}>실시간 카톡방 선착순 정보 제공 중</p>
          </div>
        </div>

        {/* 세련된 다크네이비 설명 카드 */}
        <div style={{ flex: '1', minWidth: '320px', backgroundColor: '#0F172A', color: 'white', padding: '40px 35px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: '#FEE500', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px' }}>EXCLUSIVE BENEFITS</span>
          <h2 style={{ fontSize: '28px', margin: '10px 0 25px 0', fontWeight: 'bold' }}>카카오톡 방 참여 혜택</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#FEE500', fontWeight: 'bold', fontSize: '15px' }}>⚡ 실시간 급매물 알림</p>
            <p style={{ margin: 0, color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>네이버 부동산보다 빠른 초급매, 무피/마피 분양권 정보 실시간 실시간 공유.</p>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#FEE500', fontWeight: 'bold', fontSize: '15px' }}>🗺️ 비공개 개발 호재 지도</p>
            <p style={{ margin: 0, color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>일반 찌라시가 아닌 정부 고시 및 교통 계획을 분석한 '진짜 돈 되는 땅' 선점.</p>
          </div>

          <div>
            <p style={{ margin: '0 0 5px 0', color: '#FEE500', fontWeight: 'bold', fontSize: '15px' }}>👥 고수들의 정기 Q&A</p>
            <p style={{ margin: 0, color: '#9CA3AF', fontSize: '14px', lineHeight: '1.5' }}>수십억 대 실전 투자자들과 소통하며 내 포트폴리오를 무료로 진단받는 유일한 기회.</p>
          </div>
        </div>

      </section>

      {/* 3. 질문 섹션 & 마지막 전환 가이드 */}
      <section style={{ maxWidth: '700px', margin: '80px auto 120px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', color: '#111827', marginBottom: '35px', fontWeight: 'extrabold', lineHeight: '1.4' }}>
          도움을 받을<br />
          <span style={{ color: '#2563EB' }}>전문가</span>가 없으신가요?
        </h2>
        
        <div style={{ backgroundColor: 'white', padding: '50px 30px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '50px' }}>
          <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#1F2937', marginBottom: '15px' }}>
            도대체 무엇이 맞는 투자일까?
          </p>
          <div style={{ fontSize: '65px', margin: '25px 0' }}>💬📉</div>
          <p style={{ color: '#4B5563', lineHeight: '1.8', fontSize: '16px' }}>
            "이번엔 정말 올 것 같아"<br />
            "남들 다 산다니까 나도 한 번?"<br />
            "내 감이 맞을 거야"<br /><br />
            명확한 데이터 없이 지인 말만 듣고 하는 추격 매수, 결국 물려버리는 손실로 이어집니다.<br />
            <strong>"부동산 10%" 텔레그램 및 카카오톡 채널</strong>에서 흔들리지 않는 명확한 매수/매도 타이밍의 기준을 잡으세요.
          </p>
        </div>

        {/* 마지막 하단 참여 유도 버튼 */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '15px' }}>정원 마감 전 지금 무료로 참여하기</h3>
          <a 
            href="https://open.kakao.com/o/gGrNacni" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#FEE500', color: '#1A1A1C', border: 'none', padding: '16px 50px', borderRadius: '30px', fontSize: '20px', fontWeight: 'extrabold', textDecoration: 'none', boxShadow: '0 10px 25px rgba(254, 229, 0, 0.5)', transition: 'all 0.3s' }}
          >
            카톡방 비밀번호 무료로 받기 👇
          </a>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ backgroundColor: '#0B0F19', color: '#4B5563', padding: '40px 20px', textAlign: 'center', fontSize: '14px', borderTop: '1px solid #1F2937' }}>
        © 2026 부동산 10%. All rights reserved. 본 채널은 개인 투자자들의 정보 교류를 돕는 플랫폼입니다.
      </footer>
    </div>
  );
}