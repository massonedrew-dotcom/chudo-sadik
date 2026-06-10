/* Чудо Садик — Контакты (contacts + map) */
function Contacts() {
  const { SectionHeading, Button } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId } = window;

  // ← Редактируйте контактные данные здесь.
  //   href — куда ведёт ссылка (карта/звонок/Telegram); если нет — текст без ссылки.
  const info = [
    { i: 'map-pin', t: 'Адрес',    v: 'г. Ташкент, ул. Амира Темура, 1', c: 'pink',
      href: 'https://yandex.uz/maps/?text=' + encodeURIComponent('Ташкент, улица Амира Темура, 1') },
    { i: 'phone',   t: 'Телефон',  v: '+998 90 123 45 67', c: 'sky',  href: 'tel:+998901234567' },
    { i: 'send',    t: 'Telegram', v: '@chudo_sadik',      c: 'mint', href: 'https://t.me/chudo_sadik' },
    { i: 'clock',   t: 'Часы работы', v: 'Ежедневно, 8:00–20:00', c: 'orange' },
  ];

  const chip = {
    pink:   { bg: 'var(--pink-100)',   fg: 'var(--pink-500)' },
    sky:    { bg: 'var(--sky-100)',    fg: 'var(--sky-500)' },
    mint:   { bg: 'var(--mint-100)',   fg: 'var(--mint-500)' },
    orange: { bg: 'var(--orange-100)', fg: 'var(--orange-500)' },
  };

  return (
    <section id="contacts" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--cream)', scrollMarginTop: '84px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Контакты" title="Приходите в гости" gradient>
          Будем рады познакомиться лично — позвоните, напишите в Telegram или просто загляните.
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '36px',
          margin: '44px 0 0', alignItems: 'stretch',
        }} className="cs-contacts-grid">
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {info.map((x) => {
              const c = chip[x.c] || chip.pink;
              const Wrap = x.href ? 'a' : 'div';
              const wrapProps = x.href
                ? { href: x.href, target: x.href.startsWith('http') ? '_blank' : undefined, rel: x.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {};
              return (
                <Wrap key={x.t} {...wrapProps} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)', padding: '16px 18px', boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none', color: 'inherit',
                  cursor: x.href ? 'pointer' : 'default',
                  transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
                }}
                  onMouseEnter={x.href ? (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } : undefined}
                  onMouseLeave={x.href ? (e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; } : undefined}
                >
                  <span style={{
                    width: 48, height: 48, flex: 'none', borderRadius: '50%',
                    background: c.bg, color: c.fg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Ic n={x.i} size={22} />
                  </span>
                  <div>
                    <span style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: '2px' }}>{x.t}</span>
                    <b style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--ink-900)' }}>{x.v}</b>
                  </div>
                </Wrap>
              );
            })}
            <Button variant="primary" size="lg" iconLeft={<Ic n="calendar-heart" size={20} />}
              onClick={() => scrollToId && scrollToId('enroll')} style={{ marginTop: '4px' }}>
              Записаться на экскурсию
            </Button>
          </div>

          {/* Map placeholder — замените на встраиваемую карту (Яндекс/Google) */}
          <div style={{
            position: 'relative', minHeight: '380px',
            borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
            border: '6px solid #fff', boxShadow: 'var(--shadow-lg)',
            background: 'linear-gradient(135deg, var(--sky-100), var(--mint-100))',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
            color: 'var(--ink-400)',
          }}>
            <Ic n="map" size={40} />
            <b style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--ink-700)' }}>Карта проезда</b>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>сюда встраивается виджет карты</span>
            <span style={{
              position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)',
              width: 18, height: 18, borderRadius: '50%', background: 'var(--color-primary)',
              boxShadow: '0 0 0 8px rgba(255,77,151,0.25)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contacts = Contacts;
