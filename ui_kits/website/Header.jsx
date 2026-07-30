/* Чудо Садик — Site header */
function Header() {
  const { Button, IconButton } = window.DesignSystem_52b7c1;
  const { Ic, SunMark, scrollToId } = window;
  const [menuOpen, setMenuOpen] = React.useState(false);
  // label — текст пункта меню, id — секция, к которой он ведёт.
  const nav = [
    { label: 'О садике',       id: 'about' },
    { label: 'Занятия',        id: 'programs' },
    { label: 'Лето',           id: 'summer' },
    { label: 'Распорядок дня',  id: 'schedule' },
    { label: 'Цены',           id: 'pricing' },
    { label: 'Отзывы',         id: 'reviews' },
    { label: 'Контакты',       id: 'contacts' },
  ];

  const go = (id) => { setMenuOpen(false); scrollToId(id); };

  return (
    <header className="cs-header" style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255, 228, 239, 0.88)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div className="cs-header-inner" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '12px clamp(20px,5vw,48px)',
        display: 'flex', alignItems: 'center', gap: '24px',
      }}>
        {/* Brand */}
        <a href="#" className="cs-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <SunMark size={42} className="cs-sun-spin" />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', color: 'var(--ink-900)' }}>
              Чудо <span className="cs-gradient-text">Садик</span>
            </span>
          </span>
        </a>

        {/* Nav (десктоп) */}
        <nav style={{ display: 'flex', gap: '4px', marginLeft: 'auto' }} className="cs-nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{
                padding: '11px 18px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: '16px', color: 'var(--ink-700)', textDecoration: 'none',
                transition: 'all var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-soft)'; e.currentTarget.style.color = 'var(--color-primary-press)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-700)'; }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Actions (десктоп) */}
        {/* Действия: размер md — раньше CTA (sm, 38px) была ниже соседней
            иконки (44px) и терялась. Магнит тянет её за курсором. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="cs-nav cs-cta">
          <IconButton icon={<Ic n="send" size={22} />} variant="soft" size="md" label="Telegram" onClick={() => scrollToId('contacts')} />
          <span data-cs-magnet>
            <Button variant="primary" size="md" iconLeft={<Ic n="phone" size={18} />} onClick={() => scrollToId('enroll')}>Записаться</Button>
          </span>
        </div>

        {/* Бургер (мобильный) */}
        <button
          className="cs-burger"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            marginLeft: 'auto', width: 46, height: 46, borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--color-border)', background: 'var(--color-surface)',
            color: 'var(--ink-900)', cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Ic n={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Выпадающее меню (мобильное) */}
      <nav className={`cs-mobile-nav${menuOpen ? ' cs-mobile-nav-open' : ''}`} style={{
        flexDirection: 'column', gap: '4px',
        padding: '8px clamp(20px,5vw,48px) 16px',
        borderTop: '1px solid var(--color-border)', background: 'var(--cream)',
      }}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`}
            onClick={(e) => { e.preventDefault(); go(n.id); }}
            style={{
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              fontWeight: 700, fontSize: '16px', color: 'var(--ink-700)', textDecoration: 'none',
            }}
          >{n.label}</a>
        ))}
        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <Button variant="soft" size="md" iconLeft={<Ic n="send" size={18} />} onClick={() => go('contacts')} style={{ flex: 1 }}>Telegram</Button>
          <Button variant="primary" size="md" iconLeft={<Ic n="phone" size={17} />} onClick={() => go('enroll')} style={{ flex: 1 }}>Записаться</Button>
        </div>
      </nav>
    </header>
  );
}
window.Header = Header;
