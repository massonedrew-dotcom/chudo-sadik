/* Чудо Садик — Why parents choose us + daily Telegram report */
function Care() {
  const { SectionHeading } = window.DesignSystem_52b7c1;
  const { Ic, Photo } = window;

  const points = [
    { i: 'shield-check', t: 'Безопасность', d: 'Видеонаблюдение, контроль доступа и забота 24/7.' },
    { i: 'utensils', t: '5-разовое питание', d: 'Сбалансированное меню для растущего организма.' },
    { i: 'heart', t: 'Тёплая атмосфера', d: 'Маленькие группы и внимание к каждому ребёнку.' },
    { i: 'send', t: 'Ежедневный отчёт', d: 'Фото и новости дня в вашей Telegram-группе.' },
  ];

  return (
    <section id="about" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--cream)', scrollMarginTop: '84px' }}>
      <div className="cs-care-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <SectionHeading align="left" eyebrow="Почему мы" title="Спокойно за ребёнка — каждый день">
            Мы заботимся не только о малышах, но и о спокойствии родителей.
          </SectionHeading>
          <div className="cs-care-points" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {points.map((p) => (
              <div key={p.t} style={{ display: 'flex', gap: '14px' }}>
                <span style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--pink-100)', color: 'var(--pink-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n={p.i} size={22} />
                </span>
                <div>
                  <b style={{ fontFamily: 'var(--font-display)', fontSize: '17px', display: 'block', marginBottom: '3px' }}>{p.t}</b>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{p.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Фото «Почему выбирают именно нас» */}
        <Photo src="../../assets/photos/kids-reading.jpg" alt="Дети в садике Чудо — почему выбирают именно нас"
          style={{
            height: '560px', objectFit: 'contain',
            background: 'linear-gradient(180deg, #FFF1F6 0%, #FFE4EE 100%)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)', border: '6px solid #fff',
          }} />
      </div>
    </section>
  );
}
window.Care = Care;
