/* Чудо Садик — Галерея занятий (реальные фото) */
function Gallery() {
  const { SectionHeading } = window.DesignSystem_52b7c1;

  // ← Фото лежат в assets/photos. alt — описание для доступности/SEO.
  const photos = [
    { src: '../../assets/photos/dance.jpg',       alt: 'Танцы в садике Чудо' },
    { src: '../../assets/photos/taekwondo.jpg',   alt: 'Тхэквондо для детей' },
    { src: '../../assets/photos/robotics.jpg',    alt: 'Робототехника для детей' },
    { src: '../../assets/photos/gymnastics.jpg',  alt: 'Гимнастика для малышей' },
    { src: '../../assets/photos/massage.jpg',     alt: 'Детский массаж' },
    { src: '../../assets/photos/summer-pool.jpg', alt: 'Летний отдых у бассейна' },
  ];

  const [lifted, setLifted] = React.useState(-1);

  return (
    <section id="gallery" className="cs-reveal" style={{
      padding: 'var(--section-y) 0',
      background: 'linear-gradient(180deg, var(--cream), var(--pink-50))',
      scrollMarginTop: '92px',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Галерея" title="Моменты из жизни садика" gradient>
          Каждый день — это игры, занятия и маленькие открытия. Загляните, как у нас проходит время. ✨
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '18px', margin: '40px 0 0',
        }}>
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              onMouseEnter={() => setLifted(i)}
              onMouseLeave={() => setLifted(-1)}
              style={{
                display: 'block', width: '100%', aspectRatio: '3 / 4', objectFit: 'cover',
                borderRadius: 'var(--radius-lg)',
                border: '4px solid #fff',
                boxShadow: lifted === i ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                transform: lifted === i ? 'translateY(-4px)' : 'none',
                transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Gallery = Gallery;
