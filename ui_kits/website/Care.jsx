/* Чудо Садик — Why parents choose us + daily Telegram report */
function Care() {
  const { SectionHeading, Card, Badge, Avatar } = window.DesignSystem_52b7c1;
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

        {/* Telegram report mock */}
        <div style={{ position: 'relative' }}>
          <Photo src="../../assets/photos/kids-reading.jpg" alt="Дети в садике Чудо" objectPosition="center 35%" style={{ height: '380px', boxShadow: 'var(--shadow-lg)', border: '6px solid #fff' }} />
          <Card glow="none" style={{ position: 'absolute', right: '-20px', bottom: '-26px', width: '290px', padding: '16px', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--sky-400)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ic n="send" size={18} />
              </span>
              <div style={{ lineHeight: 1.2 }}>
                <b style={{ fontSize: '14px' }}>Чудо Садик · группа</b>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600 }}>сегодня, 12:30</span>
              </div>
            </div>
            <div style={{ background: 'var(--sky-50)', borderRadius: 'var(--radius-md)', padding: '10px 12px', fontSize: '14px', color: 'var(--ink-700)', lineHeight: 1.5 }}>
              Сегодня лепили солнышко из пластилина и гуляли в парке. Все малыши покушали с аппетитом! ☀️😊
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
              <Avatar name="М П" color="pink" size="xs" />
              <Avatar name="А К" color="mint" size="xs" />
              <Avatar name="О С" color="sky" size="xs" />
              <Badge color="success" size="sm" style={{ marginLeft: '4px' }}>12 фото</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Care = Care;
