/* Чудо Садик — Footer */
function Footer() {
  const { IconButton } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId } = window;

  const cols = [
    { h: 'Садик', items: ['О нас', 'Педагоги', 'Распорядок дня', 'Питание', 'Безопасность'] },
    { h: 'Занятия', items: ['Английский', 'Танцы', 'Шахматы', 'Робототехника', 'Логопед'] },
    { h: 'Родителям', items: ['Запись', 'Отзывы', 'Распорядок дня', 'Контакты'] },
  ];

  // Куда ведёт ссылка в подвале, если для неё есть секция на странице.
  const links = {
    'О нас': 'about', 'Распорядок дня': 'schedule', 'Английский': 'programs',
    'Танцы': 'programs', 'Шахматы': 'programs', 'Робототехника': 'programs',
    'Логопед': 'programs', 'Запись': 'enroll', 'Отзывы': 'reviews', 'Контакты': 'contacts',
  };

  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff', paddingTop: 'clamp(48px,6vw,72px)' }}>
      <div className="cs-footer-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px',
      }}>
        <div className="cs-footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="../../assets/logo-sun.png" alt="Логотип Чудо Садик" style={{ width: 44, height: 44 }} />
            <span style={{ lineHeight: 1 }}>
              <b style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', color: '#fff', display: 'block' }}>Чудо Садик</b>
            </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px' }}>
            Развивающий садик для малышей от 1 до 7 лет. Забота, тепло и каждый день — что-то новое.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { i: 'send',   label: 'Telegram',  onClick: () => window.open('https://t.me/chudo_sadik', '_blank', 'noopener') },
              { i: 'camera', label: 'Instagram', onClick: () => window.open('https://instagram.com/chudo_sadik', '_blank', 'noopener') },
              { i: 'phone',  label: 'Телефон',   onClick: () => { window.location.href = 'tel:+998946712626'; } },
            ].map((b) => (
              <button key={b.label} type="button" aria-label={b.label} title={b.label} onClick={b.onClick}
                className="cs-footer-social"
                style={{
                  width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius-circle)',
                  background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer',
                  transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)',
                }}
              >
                <Ic n={b.i} size={20} />
              </button>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <b style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: '#fff' }}>{c.h}</b>
            {c.items.map((it) => (
              <a key={it} href={links[it] ? `#${links[it]}` : '#'}
                onClick={(e) => { if (links[it]) { e.preventDefault(); scrollToId(links[it]); } }}
                style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-300)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'}>{it}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '40px auto 0', padding: '20px clamp(20px,5vw,48px)',
        borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        color: 'rgba(255,255,255,0.5)', fontSize: '14px',
      }}>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', alignItems: 'center' }}>
          <span>© 2026 Чудо Садик</span>
          <a href="privacy.html" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-300)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Политика конфиденциальности</a>
        </span>
        <span>г. Ташкент · Пн–Пт 8:00–18:00</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
