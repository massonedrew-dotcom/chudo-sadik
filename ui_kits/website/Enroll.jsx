/* Чудо Садик — Enrolment CTA with interactive form */
function Enroll() {
  const { Button, Input, Badge } = window.DesignSystem_52b7c1;
  const { Ic, Blob, formatPhone, sanitize } = window;
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <section id="enroll" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--color-surface)', scrollMarginTop: '84px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)', background: 'var(--gradient-sunrise)',
          padding: 'clamp(36px,5vw,64px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center',
          boxShadow: 'var(--shadow-md)',
        }} className="cs-enroll-grid">
          <Blob color="var(--pink-200)" size={260} style={{ right: '-60px', top: '-60px' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Badge color="primary" variant="solid" size="lg" style={{ alignSelf: 'flex-start' }} iconLeft={<Ic n="sparkles" size={16} />}>
              Идёт запись · есть места
            </Badge>
            <h2 style={{ font: 'var(--font-h2)', fontSize: 'clamp(30px,3.6vw,48px)', margin: 0 }}>
              Приходите к нам<br />на экскурсию
            </h2>
            <p style={{ font: 'var(--font-lead)', fontSize: '18px', color: 'var(--ink-700)', maxWidth: '420px' }}>
              Оставьте заявку — перезвоним, ответим на вопросы и пригласим познакомиться с садиком и педагогами.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '4px', flexWrap: 'wrap' }}>
              <a href="tel:+998946712626" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--ink-700)', textDecoration: 'none' }}>
                <Ic n="phone" size={18} color="var(--color-primary)" /> +998 94 671 26 26
              </a>
              <a href="https://t.me/chudo_sadik" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--ink-700)', textDecoration: 'none' }}>
                <Ic n="send" size={18} color="var(--sky-500)" /> @chudo_sadik
              </a>
            </div>
          </div>

          <div style={{
            position: 'relative', background: '#fff', borderRadius: 'var(--radius-xl)',
            padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--shadow-lg)',
          }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px', padding: '24px 0' }}>
                <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--mint-100)', color: 'var(--mint-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n="check" size={38} />
                </span>
                <h3 style={{ font: 'var(--font-h3)', fontSize: '26px', margin: 0 }}>Спасибо{name ? `, ${name}` : ''}! 😊</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Мы получили вашу заявку и скоро перезвоним.</p>
                <Button variant="soft" onClick={() => setSent(false)}>Отправить ещё одну</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ font: 'var(--font-h4)', fontSize: '22px', margin: '0 0 4px' }}>Записаться на экскурсию</h3>
                <Input label="Ваше имя" placeholder="Как вас зовут?" required iconLeft={<Ic n="user" size={18} />} value={name} onChange={(e) => setName(sanitize(e.target.value, 60))} />
                <Input label="Телефон" type="tel" placeholder="+998 90 123 45 67" required iconLeft={<Ic n="phone" size={18} />} value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} />
                <Input label="Возраст ребёнка" placeholder="например, 3 года" iconLeft={<Ic n="cake" size={18} />} />
                <Button type="submit" variant="primary" size="lg" block iconRight={<Ic n="arrow-right" size={20} />}>Отправить заявку</Button>
                <span style={{ fontSize: '12px', color: 'var(--color-text-subtle)', textAlign: 'center' }}>
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="privacy.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>политикой конфиденциальности</a>.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Enroll = Enroll;
