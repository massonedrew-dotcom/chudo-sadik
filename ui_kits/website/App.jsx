/* Чудо Садик — Website app shell */
function App() {
  const { Header, Hero, Programs, Banner, Care, DaySchedule, Summer, Testimonials, Enroll, Contacts, Footer, QuickApply } = window;

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Header />
      <Banner />
      <Summer />
      <Hero direction="sunshine" />
      <Care />
      <Programs />
      <DaySchedule />
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
