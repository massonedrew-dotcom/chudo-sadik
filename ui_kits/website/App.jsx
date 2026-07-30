/* Чудо Садик — Website app shell */
function App() {
  const { Header, Hero, Programs, Banner, Care, DaySchedule, Summer, Pricing, Testimonials, Enroll, Contacts, Footer, QuickApply, Marquee } = window;

  /* Живой фон всего сайта: мягкие цветные пятна медленно плывут за контентом.
     Слой лежит на z-index -1, поэтому секции выше по коду не должны иметь
     непрозрачной заливки — иначе они его закроют (см. motion.css). */
  const backdrop = (
    <div className="cs-backdrop" aria-hidden="true">
      <span className="cs-backdrop-blob" style={{ '--c': '#FFAFD3', '--x': '10%', '--y': '14%', '--s': '540px', '--t': '34s', '--d': '0s',   '--dx': '90px',  '--dy': '70px'  }} />
      <span className="cs-backdrop-blob" style={{ '--c': '#FFD980', '--x': '82%', '--y': '10%', '--s': '460px', '--t': '41s', '--d': '-8s',  '--dx': '-80px', '--dy': '90px'  }} />
      <span className="cs-backdrop-blob" style={{ '--c': '#A8E4FF', '--x': '70%', '--y': '52%', '--s': '600px', '--t': '47s', '--d': '-16s', '--dx': '70px',  '--dy': '-80px' }} />
      <span className="cs-backdrop-blob" style={{ '--c': '#C9BCFF', '--x': '16%', '--y': '74%', '--s': '520px', '--t': '38s', '--d': '-24s', '--dx': '-70px', '--dy': '-60px' }} />
      <span className="cs-backdrop-blob" style={{ '--c': '#A6EFD0', '--x': '46%', '--y': '88%', '--s': '440px', '--t': '44s', '--d': '-12s', '--dx': '60px',  '--dy': '-90px' }} />
      <span className="cs-backdrop-dots" />
    </div>
  );

  return (
    <div>
      {backdrop}
      <Header />
      <Banner />
      <Summer />
      <Hero direction="sunshine" />
      <Marquee />
      <Care />
      <Programs />
      <DaySchedule />
      <Pricing />
      <Enroll />
      <Testimonials />
      <Contacts />
      <Footer />

      {/* Плавающий виджет заявки (нижний правый угол) */}
      <QuickApply />
    </div>
  );
}
window.App = App;
