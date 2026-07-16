// app/page.tsx
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      
      {/* 1. 어두운 헤더 섹션 */}
      <header style={{ backgroundColor: '#121827', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ color: '#4ADE80', fontWeight: 'bold', marginBottom: '10px' }}>[우리 부동산]</p>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0 20px 0', lineHeight: '1.3' }}>
          감이 아닌,<br />데이터 기반 부동산 현실
        </h1>
        <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          차트를 읽고 시장의 흐름을 이해하는 사람들, 그게 바로 저희입니다.
        </p>
        <button style={{ backgroundColor: '#1D4ED8', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
          내 맞춤 아파트 찾기
        </button>
      </header>

      {/* 2. 아파트 그림과 설명 섹션 */}
      <section style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        
        {/* 아파트 그림 (인터넷에 있는 멋진 아파트 사진을 바로 가져왔어요!) */}
        <div style={{ flex: '1', minWidth: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=60" 
            alt="아파트 그림" 
            style={{ width: '100%', height: '350px', objectFit: 'cover' }}
          />
        </div>

        {/* 아파트 설명 (파란색 카드 스타일) */}
        <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#1E293B', color: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <span style={{ color: '#3B82F6', fontWeight: 'bold' }}># 추천 매물</span>
          <h2 style={{ fontSize: '24px', margin: '10px 0 20px 0' }}>데이터로 분석한 추천 단지</h2>
          <p style={{ color: '#9CA3AF', lineHeight: '1.6', marginBottom: '15px' }}>
            🏢 <strong>학군 및 교통 최적화:</strong> 지하철역 도보 5분 거리, 초품아 단지입니다.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: '1.6', marginBottom: '15px' }}>
            📈 <strong>실거래가 안정성:</strong> 최근 3년간 꾸준히 우상향한 안전 자산입니다.
          </p>
          <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
            💰 <strong>합리적인 갭투자:</strong> 전세가율이 높아 적은 자본으로 선점이 가능합니다.
          </p>
        </div>

      </section>

      {/* 3. 도움을 받을 전문가가 없으신가요? */}
      <section style={{ maxWidth: '600px', margin: '50px auto 100px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: '#111827', marginBottom: '30px', lineHeight: '1.4' }}>
          도움을 받을<br />
          <span style={{ color: '#1D4ED8' }}>전문가</span>가 없으신가요?
        </h2>
        
        <div style={{ backgroundColor: 'white', padding: '40px 20px', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937', marginBottom: '15px' }}>
            도대체 무엇이 맞는 투자일까?
          </p>
          <div style={{ fontSize: '60px', margin: '20px 0' }}>🏢🤔</div>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
            "이번엔 정말 올 것 같아"<br />
            "남들 들어가니까 나도?"<br />
            "내 느낌이 맞을 거야"<br /><br />
            명확한 기준 없이 반복되는 매매, 결국 불안과 손실로 이어지지 않으셨나요?
          </p>
        </div>
      </section>

    </div>
  );
}
