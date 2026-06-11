/* Чудо Садик — Site header */
function Header() {
  const { Button, IconButton } = window.DesignSystem_52b7c1;
  const { Ic, SunMark, scrollToId } = window;
  const [menuOpen, setMenuOpen] = React.useState(false);
  // label — текст пункта меню, id — секция, к которой он ведёт.
  const nav = [
    { label: 'О садике',       id: 'about' },
    { label: 'Занятия',        id: 'programs' },
    { label: 'Распорядок дня',  id: 'schedule' },
    { label: 'Отзывы',         id: 'reviews' },
    { label: 'Контакты',       id: 'contacts' },
  ];

  const go = (id) => { setMenuOpen(false); scrollToId(id); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,251,244,0.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '12px clamp(20px,5vw,48px)',
        display: 'flex', alignItems: 'center', gap: '24px',
      }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <SunMark size={42} />
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
                padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: '15px', color: 'var(--ink-700)', textDecoration: 'none',
                transition: 'all var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-soft)'; e.currentTarget.style.color = 'var(--color-primary-press)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-700)'; }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Actions (десктоп) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="cs-nav">
          <IconButton icon={<Ic n="send" size={20} />} variant="soft" label="Telegram" onClick={() => scrollToId('contacts')} />
          <Button variant="primary" size="sm" iconLeft={<Ic n="phone" size={17} />} onClick={() => scrollToId('enroll')}>Записаться</Button>
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
