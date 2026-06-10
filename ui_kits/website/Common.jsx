/* Чудо Садик — UI kit shared helpers (window-global pattern) */

const Ic = ({ n, size = 24, color, style = {} }) => (
  <i data-lucide={n} style={{ width: size, height: size, color, ...style }}></i>
);

/* Photo placeholder — marks where a real child/teacher photo belongs */
function Photo({ caption = 'Фото', icon = 'image', tint = 'pink', radius = 'var(--radius-lg)', style = {} }) {
  const grad = {
    pink: 'linear-gradient(135deg, var(--pink-100), var(--orange-100))',
    sky: 'linear-gradient(135deg, var(--sky-100), var(--mint-100))',
    sun: 'linear-gradient(135deg, var(--yellow-100), var(--orange-100))',
    purple: 'linear-gradient(135deg, var(--purple-100), var(--pink-100))',
  };
  return (
    <div style={{
      background: grad[tint] || grad.pink,
      borderRadius: radius,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '10px', color: 'var(--ink-400)', overflow: 'hidden', position: 'relative',
      ...style,
    }}>
      <Ic n={icon} size={34} />
      <span style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '.02em' }}>{caption}</span>
    </div>
  );
}

/* Decorative blurred blob */
function Blob({ color = 'var(--pink-200)', size = 220, style = {} }) {
  return <div style={{
    position: 'absolute', width: size, height: size, borderRadius: '50%',
    background: color, filter: 'blur(40px)', opacity: 0.55, pointerEvents: 'none', ...style,
  }} />;
}

/* Sun mark image */
function SunMark({ size = 40, alt = 'Логотип Чудо Садик', style = {} }) {
  return <img src="../../assets/logo-sun.png" alt={alt} style={{ width: size, height: size, ...style }} />;
}

/* Smooth-scroll to a section by id (accounts for sticky header via scrollMarginTop) */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Маска телефона: гарантирует «+» в начале, не привязана к стране.
   Сохраняет цифры и пробелы как ввёл пользователь (до 15 цифр, стандарт E.164). */
function formatPhone(value) {
  let v = (value || '').replace(/[^\d ]/g, '');           // оставляем только цифры и пробелы
  const digits = v.replace(/\s/g, '');
  if (!digits) return '';
  if (digits.length > 15) {                               // не даём ввести больше 15 цифр
    let count = 0;
    v = v.replace(/\d/g, (d) => (++count > 15 ? '' : d));
  }
  return '+' + v.replace(/^\s+/, '');
}

/* Лёгкая санитизация текстового ввода (защита от вставки HTML/скриптов).
   Убирает угловые скобки и управляющие символы (код < 32 и DEL), ограничивает длину. */
function sanitize(value, maxLen = 80) {
  const cleaned = (value || '')
    .replace(/[<>]/g, '')
    .split('')
    .filter((ch) => {
      const code = ch.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('');
  return cleaned.slice(0, maxLen);
}

Object.assign(window, { Ic, Photo, Blob, SunMark, scrollToId, formatPhone, sanitize });
