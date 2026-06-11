/* Чудо Садик — Programmes grid with category filter and photos */
function Programs() {
  const { SectionHeading, Tag } = window.DesignSystem_52b7c1;
  const { Ic } = window;
  const [filter, setFilter] = React.useState('Все');
  const [lifted, setLifted] = React.useState('');

  const cats = [
    { name: 'Все', dot: 'var(--ink-700)' },
    { name: 'Речь и язык', dot: 'var(--cat-english)' },
    { name: 'Движение', dot: 'var(--cat-dance)' },
    { name: 'Творчество', dot: 'var(--cat-acting)' },
    { name: 'Логика', dot: 'var(--cat-chess)' },
  ];

  // img — реальное фото; pos — какую часть кадра показать (чтобы лица не резались).
  // Где фото нет — рисуется красивая плитка с иконкой.
  const programs = [
    { t: 'Английский язык', d: 'Живые занятия в игре — с самого раннего возраста.', i: 'languages', c: 'sky', g: 'Речь и язык', img: '../../assets/photos/english.jpg', pos: 'center 35%' },
    { t: 'Логопед-дефектолог', d: 'Чистая речь и индивидуальный подход к каждому.', i: 'mic', c: 'sun', g: 'Речь и язык', img: '../../assets/photos/speech.jpg', pos: 'center 50%' },
    { t: 'Танцы', d: 'Музыка, ритм и радость движения.', i: 'music', c: 'pink', g: 'Движение', img: '../../assets/photos/dance.jpg', pos: 'center 55%' },
    { t: 'Тхэквондо', d: 'Дисциплина, сила и уверенность в себе.', i: 'swords', c: 'sky', g: 'Движение', img: '../../assets/photos/taekwondo.jpg', pos: 'center 38%' },
    { t: 'Гимнастика', d: 'Здоровье, осанка и ловкость каждый день.', i: 'activity', c: 'mint', g: 'Движение', img: '../../assets/photos/gymnastics.jpg', pos: 'center 52%' },
    { t: 'Массаж (курс)', d: 'Оздоровительный курс под присмотром специалиста.', i: 'heart-handshake', c: 'purple', g: 'Движение', img: '../../assets/photos/massage.jpg', pos: 'center 50%' },
    { t: 'Актёрское мастерство', d: 'Сцена, эмоции и уверенность в себе.', i: 'drama', c: 'orange', g: 'Творчество', img: '../../assets/photos/acting.jpg', pos: 'center 40%' },
    { t: 'Рисование', d: 'Краски, фантазия и мелкая моторика.', i: 'palette', c: 'sun', g: 'Творчество', img: '../../assets/photos/drawing.jpg', pos: 'center 35%' },
    { t: 'Развивающие игры', d: 'Каждый день — новое маленькое открытие.', i: 'puzzle', c: 'pink', g: 'Творчество', img: '../../assets/photos/games.jpg', pos: 'center 35%' },
    { t: 'Мастер-классы', d: 'Творческие занятия и новые умения.', i: 'sparkles', c: 'mint', g: 'Творчество', img: '../../assets/photos/crafts.jpg', pos: 'center 50%' },
    { t: 'Шахматы', d: 'Логика, внимание и первые победы.', i: 'crown', c: 'purple', g: 'Логика', img: '../../assets/photos/chess.jpg', pos: 'center 30%' },
    { t: 'Робототехника', d: 'Первые шаги в технике и конструировании.', i: 'bot', c: 'sky', g: 'Логика', img: '../../assets/photos/robotics.jpg', pos: 'center 40%' },
  ];

  const tile = {
    pink:   { a: 'var(--pink-100)',   b: 'var(--pink-50)',   fg: 'var(--pink-500)' },
    sky:    { a: 'var(--sky-100)',    b: 'var(--sky-50)',    fg: 'var(--sky-500)' },
    mint:   { a: 'var(--mint-100)',   b: 'var(--mint-50)',   fg: 'var(--mint-500)' },
    sun:    { a: 'var(--yellow-100)', b: 'var(--yellow-50)', fg: 'var(--yellow-600)' },
    orange: { a: 'var(--orange-100)', b: 'var(--orange-50)', fg: 'var(--orange-500)' },
    purple: { a: 'var(--purple-100)', b: 'var(--purple-50)', fg: 'var(--purple-500)' },
  };

  const shown = filter === 'Все' ? programs : programs.filter((p) => p.g === filter);
  const HEADER_H = 190;

  return (
    <section id="programs" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--color-surface)', scrollMarginTop: '84px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Наши занятия" title="Направления развития" gradient>
          Всё, что нужно малышу, чтобы расти счастливым, здоровым и любознательным.
        </SectionHeading>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', margin: '32px 0 36px' }}>
          {cats.map((c) => (
            <Tag key={c.name} dot={c.dot} active={filter === c.name} onClick={() => setFilter(c.name)}>{c.name}</Tag>
          ))}
        </div>

        <div className="cs-programs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {shown.map((p) => {
            const t = tile[p.c] || tile.pink;
            const up = lifted === p.t;
            return (
              <div key={p.t}
                onMouseEnter={() => setLifted(p.t)}
                onMouseLeave={() => setLifted('')}
                style={{
                  background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)', overflow: 'hidden',
                  boxShadow: up ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                  transform: up ? 'translateY(-6px)' : 'none',
                  transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
                  display: 'flex', flexDirection: 'column',
                }}>
                {/* Шапка карточки: фото или красивая плитка с иконкой-стикером */}
                {p.img ? (
                  <img src={p.img} alt={p.t} loading="lazy"
                    style={{ display: 'block', width: '100%', height: HEADER_H + 'px', objectFit: 'cover', objectPosition: p.pos || 'center' }} />
                ) : (
                  <div style={{
                    height: HEADER_H + 'px', position: 'relative',
                    background: 'linear-gradient(135deg, ' + t.a + ', ' + t.b + ')',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                  }}>
                    {/* мягкие декоративные круги */}
                    <span style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.35)', top: -24, right: -20 }} />
                    <span style={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', bottom: -16, left: -10 }} />
                    {/* иконка-стикер */}
                    <span style={{
                      width: 78, height: 78, borderRadius: '50%', background: '#fff', color: t.fg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)', position: 'relative',
                    }}>
                      <Ic n={p.i} size={36} />
                    </span>
                  </div>
                )}
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h3 style={{ font: 'var(--font-h4)', fontSize: '20px', color: 'var(--color-text)', margin: 0 }}>{p.t}</h3>
                  <p style={{ font: 'var(--font-body-r)', color: 'var(--color-text-muted)', margin: 0 }}>{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Programs = Programs;
