/* Чудо Садик — Website app shell */
function App() {
  const { Header, Hero, Programs, Banner, Care, DaySchedule, Summer, Pricing, Testimonials, Enroll, Contacts, Footer, QuickApply, Marquee } = window;

  return (
    <div style={{ background: 'var(--cream)' }}>
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
