function Banner() {
  const {
    scrollToId,
    asset
  } = window;
  return React.createElement("section", {
    "aria-label": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
    className: "cs-banner",
    style: {
      overflow: 'hidden'
    }
  }, React.createElement("picture", null, React.createElement("source", {
    type: "image/webp",
    sizes: "100vw",
    srcSet: asset('assets/photos/banner-welcome-1200.webp') + ' 1200w, ' + asset('assets/photos/banner-welcome-1800.webp') + ' 1800w, ' + asset('assets/photos/banner-welcome-2600.webp') + ' 2600w'
  }), React.createElement("img", {
    src: asset('assets/photos/banner-welcome-1800.jpg'),
    sizes: "100vw",
    srcSet: asset('assets/photos/banner-welcome-1200.jpg') + ' 1200w, ' + asset('assets/photos/banner-welcome-1800.jpg') + ' 1800w, ' + asset('assets/photos/banner-welcome-2600.jpg') + ' 2600w',
    alt: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0434\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0430\u0434 \u0427\u0443\u0434\u043E \u2014 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u0442\u0430\u043D\u0446\u044B, \u0442\u0445\u044D\u043A\u0432\u043E\u043D\u0434\u043E, \u0448\u0430\u0445\u043C\u0430\u0442\u044B, \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F",
    width: 2600,
    height: 951,
    loading: "eager",
    fetchPriority: "high",
    decoding: "async",
    onClick: () => scrollToId && scrollToId('enroll'),
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      cursor: 'pointer'
    }
  })));
}
window.Banner = Banner;