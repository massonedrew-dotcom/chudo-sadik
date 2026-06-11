/* Чудо Садик — полноширинный баннер «Добро пожаловать» */
function Banner() {
  const { scrollToId } = window;
  return (
    <section aria-label="Добро пожаловать" style={{
      background: 'var(--cream)', padding: 'clamp(16px,3vw,32px) clamp(20px,5vw,48px)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <img
          src="../../assets/photos/banner-welcome.jpg"
          alt="Добро пожаловать в детский сад Чудо — английский, танцы, тхэквондо, шахматы, робототехника и другие занятия"
          loading="lazy"
          onClick={() => scrollToId && scrollToId('enroll')}
          style={{
            display: 'block', width: '100%', height: 'auto',
            borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
          }}
        />
      </div>
    </section>
  );
}
window.Banner = Banner;
