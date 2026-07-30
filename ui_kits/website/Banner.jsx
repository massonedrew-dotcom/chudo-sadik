/* Чудо Садик — полноширинный баннер «Добро пожаловать» */
function Banner() {
  const { scrollToId } = window;
  return (
    <section aria-label="Добро пожаловать" className="cs-banner" style={{ overflow: 'hidden' }}>
      {/* Баннер растягивается на всю ширину окна, поэтому одной картинки на 1200px
          не хватало — на широких экранах она заметно мылила. Пересобран из
          оригинала 4707×1721 в трёх размерах; браузер сам берёт подходящий.
          Ленивую загрузку убрали: баннер сразу под шапкой, ждать его нечего. */}
      <picture>
        <source
          type="image/webp"
          sizes="100vw"
          srcSet={'../../assets/photos/banner-welcome-1200.webp 1200w, ' +
                  '../../assets/photos/banner-welcome-1800.webp 1800w, ' +
                  '../../assets/photos/banner-welcome-2600.webp 2600w'}
        />
        <img
          src="../../assets/photos/banner-welcome-1800.jpg"
          sizes="100vw"
          srcSet={'../../assets/photos/banner-welcome-1200.jpg 1200w, ' +
                  '../../assets/photos/banner-welcome-1800.jpg 1800w, ' +
                  '../../assets/photos/banner-welcome-2600.jpg 2600w'}
          alt="Добро пожаловать в детский сад Чудо — английский, танцы, тхэквондо, шахматы, робототехника и другие занятия"
          width={2600}
          height={951}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onClick={() => scrollToId && scrollToId('enroll')}
          style={{
            display: 'block', width: '100%', height: 'auto',
            cursor: 'pointer',
          }}
        />
      </picture>
    </section>
  );
}
window.Banner = Banner;
