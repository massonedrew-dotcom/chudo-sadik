/* Чудо Садик — Цены (pricing plans) */
function Pricing() {
  const { SectionHeading, Button, Badge } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId } = window;

  // ← Редактируйте тарифы здесь. price/period — цена и период,
  //   featured — выделенный «популярный» тариф, feats — список включённого.
  //   ВНИМАНИЕ: цифры цен — заглушки, замените на реальные.
  const plans = [
    {
      name: 'Половина дня',
      price: '2 000 000', period: 'сум / мес',
      desc: 'Утро в садике до обеда.',
      color: 'sky', featured: false,
      feats: ['Пребывание 8:00–13:00', '3-разовое питание', 'Развивающие занятия', 'Утренняя прогулка'],
    },
    {
      name: 'Полный день',
      price: '3 000 000', period: 'сум / мес',
      desc: 'Весь день с заботой и развитием.',
      color: 'pink', featured: true,
      feats: ['Пребывание 8:00–20:00', '5-разовое питание', 'Все развивающие занятия', 'Тихий час', 'Ежедневный отчёт в Telegram'],
    },
    {
      name: 'Группа выходного дня',
      price: '150 000', period: 'сум / день',
      desc: 'Суббота с пользой и игрой.',
      color: 'mint', featured: false,
      feats: ['Занятия и творчество', 'Питание', 'Присмотр и забота', 'Гибкое посещение'],
    },
  ];

  const accent = {
    pink:   { soft: 'var(--pink-100)',   ink: 'var(--pink-500)' },
    sky:    { soft: 'var(--sky-100)',    ink: 'var(--sky-500)' },
    mint:   { soft: 'var(--mint-100)',   ink: 'var(--mint-500)' },
  };

  return (
    <section id="pricing" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--cream)', scrollMarginTop: '84px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Цены" title="Понятные тарифы без скрытых платежей" gradient>
          Выберите удобный формат — а мы поможем малышу расти счастливым.
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px',
          margin: '44px auto 0', maxWidth: '980px', alignItems: 'stretch',
        }} className="cs-pricing-grid">
          {plans.map((p) => {
            const a = accent[p.color] || accent.pink;
            return (
              <div key={p.name} style={{
                position: 'relative',
                background: 'var(--color-surface)',
                border: p.featured ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 26px',
                boxShadow: p.featured ? 'var(--shadow-pink)' : 'var(--shadow-md)',
                display: 'flex', flexDirection: 'column', gap: '18px',
                transform: p.featured ? 'translateY(-6px)' : 'none',
              }}>
                {p.featured && (
                  <Badge color="primary" variant="solid" size="sm" iconLeft={<Ic n="sparkles" size={13} />}
                    style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)' }}>
                    Популярный выбор
                  </Badge>
                )}

                <div>
                  <h3 style={{ font: 'var(--font-h4)', fontSize: '22px', margin: '0 0 4px' }}>{p.name}</h3>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{p.desc}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <b style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '38px', color: 'var(--ink-900)' }}>{p.price}</b>
                  <span style={{ fontSize: '15px', color: 'var(--color-text-muted)', fontWeight: 700 }}>{p.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.feats.map((f) => (
                    <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--ink-700)' }}>
                      <span style={{ width: 22, height: 22, flex: 'none', borderRadius: '50%', background: a.soft, color: a.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ic n="check" size={14} />
                      </span>
                      {f}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Button
                    variant={p.featured ? 'primary' : 'outline'}
                    size="md" block
                    iconRight={<Ic n="arrow-right" size={18} />}
                    onClick={() => scrollToId && scrollToId('enroll')}
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--color-text-subtle)' }}>
          Возможна оплата помесячно. Точную стоимость для вашего возраста уточним по телефону. 💛
        </p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
