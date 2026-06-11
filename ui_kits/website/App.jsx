/* Чудо Садик — Website app shell */
function App() {
  const { Header, Hero, Programs, Care, DaySchedule, Testimonials, Enroll, Contacts, Footer, QuickApply } = window;

  return (
    <div style={{ background: 'var(--cream)' }}>
      <Header />
      <Hero direction="sunshine" />
      <Programs />
      <Care />
      <DaySchedule />
      <Testimonials />
      <Enroll />
      <Contacts />
      <Footer />

      {/* Плавающий виджет заявки (нижний правый угол) */}
      <QuickApply />
    </div>
  );
}
window.App = App;
