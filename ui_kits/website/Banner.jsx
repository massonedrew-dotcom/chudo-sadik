/* Чудо Садик — полноширинный баннер «Добро пожаловать» */
function Banner() {
  const { scrollToId } = window;
  return (
    <section aria-label="Добро пожаловать" className="cs-banner" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
      <img
        src="../../assets/photos/banner-welcome.jpg"
        alt="Добро пожаловать в детский сад Чудо — английский, танцы, тхэквондо, шахматы, робототехника и другие занятия"
        loading="lazy"
        onClick={() => scrollToId && scrollToId('enroll')}
        style={{
          display: 'block', width: '100%', height: 'auto',
          cursor: 'pointer',
        }}
      />
    </section>
  );
}
window.Banner = Banner;
