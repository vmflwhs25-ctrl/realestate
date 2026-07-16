export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-yellow-400 text-lg tracking-[8px] uppercase">
           부동산 10%
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
          상위 10%는
          <br />
          이미 움직이고 있습니다.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          뉴스보다 빠른 시장 분석과 개발호재를
          오픈채팅에서 무료로 확인해보세요.
        </p>

        <a
          href="https://open.kakao.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
        >
          카카오 오픈채팅 참여하기 →
        </a>
      </section>

      {/* 소개 */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            왜 많은 분들이 참여할까요?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-neutral-900 p-8">
              <h3 className="text-2xl font-bold text-yellow-400">
                개발호재
              </h3>
              <p className="mt-4 text-gray-400">
                교통, 재개발, 신도시 등 핵심 이슈를 쉽게 정리합니다.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-900 p-8">
              <h3 className="text-2xl font-bold text-yellow-400">
                입지분석
              </h3>
              <p className="mt-4 text-gray-400">
                부산 주요 지역의 장점과 미래가치를 분석합니다.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-900 p-8">
              <h3 className="text-2xl font-bold text-yellow-400">
                시장흐름
              </h3>
              <p className="mt-4 text-gray-400">
                최신 시장 분위기와 투자 인사이트를 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold">
          지금 바로 무료 오픈채팅에 참여하세요
        </h2>

        <p className="mt-6 text-xl text-gray-400">
          먼저 정보를 아는 사람이 먼저 움직입니다.
        </p>

        <a
          href="https://open.kakao.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-5 text-xl font-bold text-black transition hover:scale-105"
        >
          무료 참여하기
        </a>
      </section>
    </main>
  );
}