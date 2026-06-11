/* Чудо Садик — Programmes grid with category filter */
function Programs() {
  const { SectionHeading, FeatureCard, Tag } = window.DesignSystem_52b7c1;
  const { Ic } = window;
  const [filter, setFilter] = React.useState('Все');

  const cats = [
    { name: 'Все', dot: 'var(--ink-700)' },
    { name: 'Речь и язык', dot: 'var(--cat-english)' },
    { name: 'Движение', dot: 'var(--cat-dance)' },
    { name: 'Творчество', dot: 'var(--cat-acting)' },
    { name: 'Логика', dot: 'var(--cat-chess)' },
  ];

  const programs = [
    { t: 'Английский язык', d: 'Живые занятия в игре — с самого раннего возраста.', i: 'languages', c: 'sky', g: 'Речь и язык' },
    { t: 'Логопед-дефектолог', d: 'Чистая речь и индивидуальный подход к каждому.', i: 'mic', c: 'sun', g: 'Речь и язык' },
    { t: 'Танцы', d: 'Музыка, ритм и радость движения.', i: 'music', c: 'pink', g: 'Движение' },
    { t: 'Тхэквондо', d: 'Дисциплина, сила и уверенность в себе.', i: 'swords', c: 'sky', g: 'Движение' },
    { t: 'Гимнастика', d: 'Здоровье, осанка и ловкость каждый день.', i: 'activity', c: 'mint', g: 'Движение' },
    { t: 'Массаж (курс)', d: 'Оздоровительный курс под присмотром специалиста.', i: 'heart-handshake', c: 'purple', g: 'Движение' },
    { t: 'Актёрское мастерство', d: 'Сцена, эмоции и уверенность в себе.', i: 'drama', c: 'orange', g: 'Творчество' },
    { t: 'Рисование', d: 'Краски, фантазия и мелкая моторика.', i: 'palette', c: 'sun', g: 'Творчество' },
    { t: 'Развивающие игры', d: 'Каждый день — новое маленькое открытие.', i: 'puzzle', c: 'pink', g: 'Творчество' },
    { t: 'Мастер-классы', d: 'Творческие занятия и новые умения.', i: 'sparkles', c: 'mint', g: 'Творчество' },
    { t: 'Шахматы', d: 'Логика, внимание и первые победы.', i: 'crown', c: 'purple', g: 'Логика' },
    { t: 'Робототехника', d: 'Первые шаги в технике и конструировании.', i: 'bot', c: 'sky', g: 'Логика' },
  ];

  const shown = filter === 'Все' ? programs : programs.filter((p) => p.g === filter);

  return (
    <section id="programs" className="cs-reveal" style={{ padding: 'var(--section-y) 0', background: 'var(--color-surface)', scrollMarginTop: '84px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Наши занятия" title="Девять направлений развития" gradient>
          Всё, что нужно малышу, чтобы расти счастливым, здоровым и любознательным.
        </SectionHeading>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', margin: '32px 0 36px' }}>
          {cats.map((c) => (
            <Tag key={c.name} dot={c.dot} active={filter === c.name} onClick={() => setFilter(c.name)}>{c.name}</Tag>
          ))}
        </div>

        <div className="cs-programs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {shown.map((p) => (
            <FeatureCard key={p.t} icon={<Ic n={p.i} size={26} />} title={p.t} color={p.c}>{p.d}</FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Programs = Programs;
