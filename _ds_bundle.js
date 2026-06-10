/* @ds-bundle: {"format":3,"namespace":"DesignSystem_52b7c1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"68446d6208ba","components/core/Badge.jsx":"831b4423220a","components/core/Button.jsx":"903ad8fcc252","components/core/Card.jsx":"6eb1c53c0ee8","components/core/FeatureCard.jsx":"bf633571dd8e","components/core/IconButton.jsx":"2330c38da5cd","components/core/Input.jsx":"809095878dc4","components/core/SectionHeading.jsx":"b54859393061","components/core/Tag.jsx":"5f5fde05d418","ui_kits/website/App.jsx":"69006896a814","ui_kits/website/Care.jsx":"87b10cde0da6","ui_kits/website/Common.jsx":"34a385ac8d95","ui_kits/website/Enroll.jsx":"ed6a7bab61dc","ui_kits/website/Footer.jsx":"4f44e96023e4","ui_kits/website/Header.jsx":"247022c2022f","ui_kits/website/Hero.jsx":"220f97a3447e","ui_kits/website/Programs.jsx":"78dc54a7883c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_52b7c1 = window.DesignSystem_52b7c1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Avatar
 * Circular avatar with image or initials, optional coloured ring.
 */
function Avatar({
  src = null,
  name = '',
  size = 'md',
  color = 'pink',
  ring = false,
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  };
  const dim = sizes[size] || sizes.md;
  const fills = {
    pink: 'var(--pink-200)',
    orange: 'var(--orange-200)',
    sky: 'var(--sky-300)',
    mint: 'var(--mint-300)',
    purple: 'var(--purple-200)',
    sun: 'var(--yellow-300)'
  };
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-circle)',
      background: src ? 'transparent' : fills[color] || fills.pink,
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: dim * 0.4,
      flex: 'none',
      boxShadow: ring ? '0 0 0 3px var(--color-surface), 0 0 0 6px var(--color-primary)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Badge
 * Small rounded status/label pill. Solid or soft tint.
 */
function Badge({
  children,
  color = 'primary',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    primary: {
      solid: 'var(--color-primary)',
      soft: 'var(--pink-50)',
      softText: 'var(--pink-600)'
    },
    secondary: {
      solid: 'var(--color-secondary)',
      soft: 'var(--orange-50)',
      softText: 'var(--orange-600)'
    },
    accent: {
      solid: 'var(--color-accent)',
      soft: 'var(--purple-50)',
      softText: 'var(--purple-600)'
    },
    sun: {
      solid: 'var(--yellow-400)',
      soft: 'var(--yellow-100)',
      softText: 'var(--yellow-600)'
    },
    success: {
      solid: 'var(--color-success)',
      soft: 'var(--mint-50)',
      softText: 'var(--mint-500)'
    },
    info: {
      solid: 'var(--color-info)',
      soft: 'var(--sky-50)',
      softText: 'var(--sky-500)'
    },
    neutral: {
      solid: 'var(--ink-700)',
      soft: 'var(--sand-100)',
      softText: 'var(--ink-700)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: '11px',
      gap: '4px'
    },
    md: {
      padding: '5px 12px',
      fontSize: '13px',
      gap: '5px'
    },
    lg: {
      padding: '7px 15px',
      fontSize: '14px',
      gap: '6px'
    }
  };
  const c = palette[color] || palette.primary;
  const isSolid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      background: isSolid ? c.solid : c.soft,
      color: isSolid ? '#fff' : c.softText,
      ...sizes[size],
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Button
 * Rounded pill button with brand variants, sizes and optional icons.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = true,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      gap: '6px',
      minHeight: '38px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px',
      gap: '8px',
      minHeight: '48px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px',
      gap: '10px',
      minHeight: '58px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-orange)',
      border: '2px solid transparent'
    },
    sun: {
      background: 'var(--gradient-sun)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text)',
      boxShadow: 'none',
      border: '2px solid var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 800,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverShadow = {
    primary: 'var(--shadow-lg)',
    secondary: 'var(--shadow-lg)',
    sun: 'var(--shadow-lg)'
  };
  function onEnter(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (hoverShadow[variant]) e.currentTarget.style.boxShadow = hoverShadow[variant];
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--color-secondary-hover)';
    if (variant === 'soft') e.currentTarget.style.background = 'var(--pink-100)';
    if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--color-primary-soft)';
  }
  function onLeave(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = variants[variant].boxShadow;
    e.currentTarget.style.background = variants[variant].background;
  }
  function onDown(e) {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
  }
  function onUp(e) {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Card
 * Soft rounded surface container. Optional pastel tint, hover-lift and colour glow.
 */
function Card({
  children,
  tint = 'none',
  radius = 'lg',
  pad = 'lg',
  hover = false,
  glow = 'none',
  bordered = false,
  style = {},
  ...rest
}) {
  const tints = {
    none: 'var(--color-surface)',
    pink: 'var(--pink-50)',
    orange: 'var(--orange-50)',
    sky: 'var(--sky-50)',
    mint: 'var(--mint-50)',
    purple: 'var(--purple-50)',
    sun: 'var(--yellow-50)',
    cream: 'var(--cream)'
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
  };
  const glows = {
    none: 'var(--shadow-md)',
    pink: 'var(--shadow-pink)',
    orange: 'var(--shadow-orange)',
    yellow: 'var(--shadow-yellow)',
    purple: 'var(--shadow-purple)'
  };
  const [lifted, setLifted] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: hover ? () => setLifted(true) : undefined,
    onMouseLeave: hover ? () => setLifted(false) : undefined,
    style: {
      background: tints[tint] || tints.none,
      borderRadius: radii[radius],
      padding: pads[pad],
      boxShadow: lifted ? 'var(--shadow-lg)' : glows[glow],
      border: bordered ? '1px solid var(--color-border)' : '1px solid transparent',
      transform: lifted ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — FeatureCard
 * Programme / feature tile: circular colour icon-chip + title + description.
 */
function FeatureCard({
  icon,
  title,
  children,
  color = 'pink',
  hover = true,
  style = {},
  ...rest
}) {
  const map = {
    pink: {
      chip: 'var(--pink-100)',
      ink: 'var(--pink-500)',
      tint: 'var(--pink-50)'
    },
    orange: {
      chip: 'var(--orange-100)',
      ink: 'var(--orange-500)',
      tint: 'var(--orange-50)'
    },
    sky: {
      chip: 'var(--sky-100)',
      ink: 'var(--sky-500)',
      tint: 'var(--sky-50)'
    },
    mint: {
      chip: 'var(--mint-100)',
      ink: 'var(--mint-500)',
      tint: 'var(--mint-50)'
    },
    purple: {
      chip: 'var(--purple-100)',
      ink: 'var(--purple-500)',
      tint: 'var(--purple-50)'
    },
    sun: {
      chip: 'var(--yellow-100)',
      ink: 'var(--yellow-600)',
      tint: 'var(--yellow-50)'
    }
  };
  const c = map[color] || map.pink;
  const [lifted, setLifted] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: hover ? () => setLifted(true) : undefined,
    onMouseLeave: hover ? () => setLifted(false) : undefined,
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: lifted ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      border: '1px solid var(--color-border)',
      transform: lifted ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-circle)',
      background: c.chip,
      color: c.ink,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '20px',
      color: 'var(--color-text)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-body-r)',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — IconButton
 * Circular icon-only button. Pass a Lucide <i data-lucide> node or any glyph.
 */
function IconButton({
  icon,
  variant = 'soft',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 54
  };
  const dim = sizes[size];
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      boxShadow: 'var(--shadow-pink)',
      border: 'none'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: 'none'
    },
    surface: {
      background: 'var(--color-surface)',
      color: 'var(--ink-700)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--color-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      boxShadow: 'none',
      border: 'none'
    }
  };
  function onEnter(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    if (variant === 'soft') e.currentTarget.style.background = 'var(--pink-100)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--color-primary-soft)';
  }
  function onLeave(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.background = variants[variant].background;
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    },
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Input
 * Rounded text field with label, optional leading icon and helper/error text.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  helper,
  error = '',
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const invalid = Boolean(error);
  const borderColor = invalid ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--color-border-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-label)',
      color: 'var(--color-text)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: disabled ? 'var(--sand-50)' : 'var(--color-surface)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-pill)',
      padding: '0 18px',
      height: '52px',
      boxShadow: focused && !invalid ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-subtle)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--font-body-r)',
      color: 'var(--color-text)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-body-r)',
      fontSize: '13px',
      color: invalid ? 'var(--color-danger)' : 'var(--color-text-muted)',
      paddingLeft: '18px'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — SectionHeading
 * Centred or left-aligned section header: overline eyebrow + display title + lead.
 */
function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
  gradient = false,
  maxWidth = 640,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      borderRadius: 3,
      background: 'var(--gradient-warm)'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: gradient ? 'cs-gradient-text' : undefined,
    style: {
      font: 'var(--font-h2)',
      color: gradient ? undefined : 'var(--color-text)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Чудо Садик — Tag
 * Outlined category chip with a coloured dot. Pairs with the --cat-* palette.
 */
function Tag({
  children,
  dot = 'var(--color-primary)',
  active = false,
  size = 'md',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: '13px'
    },
    md: {
      padding: '9px 16px',
      fontSize: '14px'
    }
  };
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--color-text)' : 'var(--color-surface)',
      color: active ? 'var(--color-text-inverse)' : 'var(--color-text)',
      border: `1.5px solid ${active ? 'var(--color-text)' : 'var(--color-border-strong)'}`,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...sizes[size],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      flex: 'none',
      background: dot,
      boxShadow: active ? '0 0 0 2px rgba(255,255,255,.3)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Чудо Садик — Website kit app shell + homepage direction switcher */
function App() {
  const [dir, setDir] = React.useState('sunshine');
  const {
    Header,
    Hero,
    Programs,
    Care,
    Enroll,
    Footer
  } = window;
  const dirs = [{
    id: 'sunshine',
    label: '☀️ Солнечный'
  }, {
    id: 'tiles',
    label: '🎨 Яркие плитки'
  }, {
    id: 'calm',
    label: '🤍 Спокойный'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, {
    direction: dir
  }), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Care, null), /*#__PURE__*/React.createElement(Enroll, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(46,39,64,0.92)',
      backdropFilter: 'blur(10px)',
      padding: '6px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '12px',
      fontWeight: 700,
      padding: '0 8px 0 10px'
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F:"), dirs.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => setDir(d.id),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: '13px',
      background: dir === d.id ? 'var(--gradient-warm)' : 'transparent',
      color: dir === d.id ? '#fff' : 'rgba(255,255,255,0.72)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, d.label))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Care.jsx
try { (() => {
/* Чудо Садик — Why parents choose us + daily Telegram report */
function Care() {
  const {
    SectionHeading,
    Card,
    Badge,
    Avatar
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Photo
  } = window;
  const points = [{
    i: 'shield-check',
    t: 'Безопасность',
    d: 'Видеонаблюдение, контроль доступа и забота 24/7.'
  }, {
    i: 'utensils',
    t: '5-разовое питание',
    d: 'Сбалансированное меню для растущего организма.'
  }, {
    i: 'heart',
    t: 'Тёплая атмосфера',
    d: 'Маленькие группы и внимание к каждому ребёнку.'
  }, {
    i: 'send',
    t: 'Ежедневный отчёт',
    d: 'Фото и новости дня в вашей Telegram-группе.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B",
    title: "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0437\u0430 \u0440\u0435\u0431\u0451\u043D\u043A\u0430 \u2014 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C"
  }, "\u041C\u044B \u0437\u0430\u0431\u043E\u0442\u0438\u043C\u0441\u044F \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043E \u043C\u0430\u043B\u044B\u0448\u0430\u0445, \u043D\u043E \u0438 \u043E \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0438 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--pink-100)',
      color: 'var(--pink-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: p.i,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      display: 'block',
      marginBottom: '3px'
    }
  }, p.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--color-text-muted)',
      lineHeight: 1.5
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    caption: "\u041F\u0440\u043E\u0433\u0443\u043B\u043A\u0430 \u043D\u0430 \u0441\u0432\u0435\u0436\u0435\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0435",
    icon: "image",
    tint: "sun",
    style: {
      height: '380px',
      boxShadow: 'var(--shadow-lg)',
      border: '6px solid #fff'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    glow: "none",
    style: {
      position: 'absolute',
      right: '-20px',
      bottom: '-26px',
      width: '290px',
      padding: '16px',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--sky-400)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "send",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '14px'
    }
  }, "\u0427\u0443\u0434\u043E \u0421\u0430\u0434\u0438\u043A \xB7 \u0433\u0440\u0443\u043F\u043F\u0430"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12px',
      color: 'var(--color-text-muted)',
      fontWeight: 600
    }
  }, "\u0441\u0435\u0433\u043E\u0434\u043D\u044F, 12:30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sky-50)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: '14px',
      color: 'var(--ink-700)',
      lineHeight: 1.5
    }
  }, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043B\u0435\u043F\u0438\u043B\u0438 \u0441\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0438\u0437 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430 \u0438 \u0433\u0443\u043B\u044F\u043B\u0438 \u0432 \u043F\u0430\u0440\u043A\u0435. \u0412\u0441\u0435 \u043C\u0430\u043B\u044B\u0448\u0438 \u043F\u043E\u043A\u0443\u0448\u0430\u043B\u0438 \u0441 \u0430\u043F\u043F\u0435\u0442\u0438\u0442\u043E\u043C! \u2600\uFE0F\uD83D\uDE0A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u041C \u041F",
    color: "pink",
    size: "xs"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410 \u041A",
    color: "mint",
    size: "xs"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "\u041E \u0421",
    color: "sky",
    size: "xs"
  }), /*#__PURE__*/React.createElement(Badge, {
    color: "success",
    size: "sm",
    style: {
      marginLeft: '4px'
    }
  }, "12 \u0444\u043E\u0442\u043E"))))));
}
window.Care = Care;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Care.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Common.jsx
try { (() => {
/* Чудо Садик — UI kit shared helpers (window-global pattern) */

const Ic = ({
  n,
  size = 24,
  color,
  style = {}
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size,
    color,
    ...style
  }
});

/* Photo placeholder — marks where a real child/teacher photo belongs */
function Photo({
  caption = 'Фото',
  icon = 'image',
  tint = 'pink',
  radius = 'var(--radius-lg)',
  style = {}
}) {
  const grad = {
    pink: 'linear-gradient(135deg, var(--pink-100), var(--orange-100))',
    sky: 'linear-gradient(135deg, var(--sky-100), var(--mint-100))',
    sun: 'linear-gradient(135deg, var(--yellow-100), var(--orange-100))',
    purple: 'linear-gradient(135deg, var(--purple-100), var(--pink-100))'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: grad[tint] || grad.pink,
      borderRadius: radius,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: 'var(--ink-400)',
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: icon,
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '.02em'
    }
  }, caption));
}

/* Decorative blurred blob */
function Blob({
  color = 'var(--pink-200)',
  size = 220,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      filter: 'blur(40px)',
      opacity: 0.55,
      pointerEvents: 'none',
      ...style
    }
  });
}

/* Sun mark image */
function SunMark({
  size = 40,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-sun.png",
    alt: "",
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(window, {
  Ic,
  Photo,
  Blob,
  SunMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Common.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Enroll.jsx
try { (() => {
/* Чудо Садик — Enrolment CTA with interactive form */
function Enroll() {
  const {
    Button,
    Input,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Blob
  } = window;
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--gradient-sunrise)',
      padding: 'clamp(36px,5vw,64px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Blob, {
    color: "var(--pink-200)",
    size: 260,
    style: {
      right: '-60px',
      top: '-60px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "primary",
    variant: "solid",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "sparkles",
      size: 16
    })
  }, "\u0418\u0434\u0451\u0442 \u0437\u0430\u043F\u0438\u0441\u044C \xB7 \u0435\u0441\u0442\u044C \u043C\u0435\u0441\u0442\u0430"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--font-h2)',
      fontSize: 'clamp(30px,3.6vw,48px)',
      margin: 0
    }
  }, "\u041F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043A \u043D\u0430\u043C", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      fontSize: '18px',
      color: 'var(--ink-700)',
      maxWidth: '420px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C, \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043C \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0441\u0430\u0434\u0438\u043A\u043E\u043C \u0438 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "phone",
    size: 18,
    color: "var(--color-primary)"
  }), " +7 (900) 123-45-67"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 700,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "send",
    size: 18,
    color: "var(--sky-500)"
  }), " @chudo_sadik"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px,3vw,36px)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '14px',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--mint-100)',
      color: 'var(--mint-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "check",
    size: 38
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--font-h3)',
      fontSize: '26px',
      margin: 0
    }
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E", name ? `, ${name}` : '', "! \uD83D\uDE0A"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '16px'
    }
  }, "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C."), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    onClick: () => setSent(false)
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '22px',
      margin: '0 0 4px'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), /*#__PURE__*/React.createElement(Input, {
    label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?",
    required: true,
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "user",
      size: 18
    }),
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+7 (___) ___-__-__",
    required: true,
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "phone",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u0440\u0435\u0431\u0451\u043D\u043A\u0430",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 3 \u0433\u043E\u0434\u0430",
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "cake",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    })
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--color-text-subtle)',
      textAlign: 'center'
    }
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."))))));
}
window.Enroll = Enroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Enroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Чудо Садик — Footer */
function Footer() {
  const {
    IconButton
  } = window.DesignSystem_52b7c1;
  const {
    Ic
  } = window;
  const cols = [{
    h: 'Садик',
    items: ['О нас', 'Педагоги', 'Распорядок дня', 'Питание', 'Безопасность']
  }, {
    h: 'Занятия',
    items: ['Английский', 'Танцы', 'Шахматы', 'Робототехника', 'Логопед']
  }, {
    h: 'Родителям',
    items: ['Цены', 'Запись', 'Отзывы', 'Вопросы и ответы']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      paddingTop: 'clamp(48px,6vw,72px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-sun.png",
    alt: "",
    style: {
      width: 44,
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: '#fff',
      display: 'block'
    }
  }, "\u0427\u0443\u0434\u043E \u0421\u0430\u0434\u0438\u043A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: '11px',
      color: 'var(--purple-300)'
    }
  }, "by Color Baby House"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.62)',
      fontSize: '15px',
      lineHeight: 1.6,
      maxWidth: '280px'
    }
  }, "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0434\u0438\u043A \u0434\u043B\u044F \u043C\u0430\u043B\u044B\u0448\u0435\u0439 \u043E\u0442 1 \u0434\u043E 7 \u043B\u0435\u0442. \u0417\u0430\u0431\u043E\u0442\u0430, \u0442\u0435\u043F\u043B\u043E \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "send",
      size: 20
    }),
    variant: "surface",
    label: "Telegram",
    style: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "camera",
      size: 20
    }),
    variant: "surface",
    label: "Instagram",
    style: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "phone",
      size: 20
    }),
    variant: "surface",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    style: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: 'none'
    }
  }))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: '#fff'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.62)',
      fontSize: '15px',
      fontWeight: 600,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pink-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      padding: '20px clamp(20px,5vw,48px)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      color: 'rgba(255,255,255,0.5)',
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0427\u0443\u0434\u043E \u0421\u0430\u0434\u0438\u043A \xB7 by Color Baby House"), /*#__PURE__*/React.createElement("span", null, "\u0433. \u041C\u043E\u0441\u043A\u0432\u0430 \xB7 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E 8:00\u201320:00")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Чудо Садик — Site header */
function Header() {
  const {
    Button,
    IconButton
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    SunMark
  } = window;
  const nav = ['О садике', 'Занятия', 'Распорядок дня', 'Цены', 'Контакты'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,251,244,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px clamp(20px,5vw,48px)',
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(SunMark, {
    size: 42
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: 'var(--ink-900)'
    }
  }, "\u0427\u0443\u0434\u043E ", /*#__PURE__*/React.createElement("span", {
    className: "cs-gradient-text"
  }, "\u0421\u0430\u0434\u0438\u043A")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: '11px',
      color: 'var(--color-accent)',
      letterSpacing: '.02em',
      marginTop: '2px',
      whiteSpace: 'nowrap'
    }
  }, "by Color Baby House"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '4px',
      marginLeft: 'auto'
    },
    className: "cs-nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 700,
      fontSize: '15px',
      color: 'var(--ink-700)',
      textDecoration: 'none',
      transition: 'all var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-primary-soft)';
      e.currentTarget.style.color = 'var(--color-primary-press)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--ink-700)';
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "send",
      size: 20
    }),
    variant: "soft",
    label: "Telegram"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "phone",
      size: 17
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Чудо Садик — Hero, with 3 homepage directions */
function Hero({
  direction = 'sunshine'
}) {
  const {
    Button,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Photo,
    Blob
  } = window;
  const trust = [{
    icon: 'cake',
    t: 'от 1 до 7 лет'
  }, {
    icon: 'utensils',
    t: '5-разовое питание'
  }, {
    icon: 'send',
    t: 'отчёт в Telegram'
  }];
  const ctas = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sun",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ic, {
      n: "play",
      size: 18
    })
  }, "\u0412\u0438\u0434\u0435\u043E \u043E \u0441\u0430\u0434\u0438\u043A\u0435"));

  /* ---------- A · Sunshine: gradient headline + sun + photo ---------- */
  if (direction === 'sunshine') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--cream)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 76% 30%, var(--yellow-200) 0%, transparent 42%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement(Blob, {
      color: "var(--pink-200)",
      size: 260,
      style: {
        left: '-60px',
        bottom: '-40px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,48px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '48px',
        alignItems: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cs-overline"
    }, "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0434\u0438\u043A \xB7 1\u20137 \u043B\u0435\u0442"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--font-h1)',
        fontSize: 'clamp(40px,5.4vw,72px)',
        margin: 0
      }
    }, "\u041C\u0435\u0441\u0442\u043E, \u0433\u0434\u0435 \u0434\u0435\u0442\u044F\u043C", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "cs-gradient-text"
    }, "\u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F")), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--font-lead)',
        fontSize: '20px',
        color: 'var(--color-text-muted)',
        maxWidth: '480px'
      }
    }, "\u0422\u0451\u043F\u043B\u0430\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430, \u0437\u0430\u0431\u043E\u0442\u043B\u0438\u0432\u044B\u0435 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438 \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435. \u041C\u044B \u0440\u0430\u0434\u044B \u043F\u043E\u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0434\u0438\u043A\u0435. \u2728"), ctas, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '4px'
      }
    }, trust.map(x => /*#__PURE__*/React.createElement(Badge, {
      key: x.t,
      color: "neutral",
      iconLeft: /*#__PURE__*/React.createElement(Ic, {
        n: x.icon,
        size: 15
      }),
      size: "lg"
    }, x.t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "\u0421\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0435 \u0434\u0435\u0442\u0438 \u043D\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0438",
      icon: "sun",
      tint: "sun",
      style: {
        height: '460px',
        boxShadow: 'var(--shadow-lg)',
        border: '6px solid #fff'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '-22px',
        left: '-22px',
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '14px 18px',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--mint-100)',
        color: 'var(--mint-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      n: "heart",
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '20px'
      }
    }, "200+"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '13px',
        color: 'var(--color-text-muted)',
        fontWeight: 600
      }
    }, "\u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0445 \u043C\u0430\u043B\u044B\u0448\u0435\u0439"))))));
  }

  /* ---------- B · Playful tiles: headline + colourful photo cluster ---------- */
  if (direction === 'tiles') {
    const tiles = [{
      t: 'Танцы',
      c: 'pink',
      i: 'music'
    }, {
      t: 'Английский',
      c: 'sky',
      i: 'languages'
    }, {
      t: 'Робототехника',
      c: 'mint',
      i: 'bot'
    }, {
      t: 'Шахматы',
      c: 'purple',
      i: 'crown'
    }];
    const tints = {
      pink: 'var(--pink-100)',
      sky: 'var(--sky-100)',
      mint: 'var(--mint-100)',
      purple: 'var(--purple-100)'
    };
    const inks = {
      pink: 'var(--pink-500)',
      sky: 'var(--sky-500)',
      mint: 'var(--mint-500)',
      purple: 'var(--purple-500)'
    };
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--cream), var(--pink-50))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,88px) clamp(20px,5vw,48px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '22px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      color: "sun",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Ic, {
        n: "sparkles",
        size: 16
      })
    }, "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434 \u043E\u0442\u043A\u0440\u044B\u0442\u0430"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--font-h1)',
        fontSize: 'clamp(40px,5.2vw,68px)',
        margin: 0
      }
    }, "\u0427\u0443\u0434\u043E", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "cs-gradient-text"
    }, "\u0437\u0434\u0435\u0441\u044C")), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--font-lead)',
        fontSize: '19px',
        color: 'var(--color-text-muted)',
        maxWidth: '440px'
      }
    }, "\u0414\u0435\u0432\u044F\u0442\u044C \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439, \u0437\u0430\u0431\u043E\u0442\u0430 \u0438 \u043F\u044F\u0442\u0438\u0440\u0430\u0437\u043E\u0432\u043E\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u2014 \u0434\u043B\u044F \u043C\u0430\u043B\u044B\u0448\u0435\u0439 \u043E\u0442 1 \u0434\u043E 7 \u043B\u0435\u0442."), ctas), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '18px'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",
      icon: "image",
      tint: "pink",
      style: {
        height: '210px',
        gridColumn: '1 / -1',
        boxShadow: 'var(--shadow-md)'
      }
    }), tiles.map(x => /*#__PURE__*/React.createElement("div", {
      key: x.t,
      style: {
        background: tints[x.c],
        borderRadius: 'var(--radius-lg)',
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minHeight: '120px',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: '#fff',
        color: inks[x.c],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      n: x.i,
      size: 22
    })), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        color: 'var(--ink-900)'
      }
    }, x.t))))));
  }

  /* ---------- C · Warm & calm: photo-led, reassuring ---------- */
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    caption: "\u0422\u0451\u043F\u043B\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0434\u0438\u043A\u0430",
    icon: "image",
    tint: "sky",
    style: {
      height: '520px',
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(46,39,64,0.62) 0%, rgba(46,39,64,0.18) 55%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'clamp(24px,5vw,64px)',
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: '520px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--yellow-300)'
    }
  }, "\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441\u0430\u0434\u0438\u043A \xB7 1\u20137 \u043B\u0435\u0442"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--font-h1)',
      fontSize: 'clamp(36px,4.6vw,60px)',
      color: '#fff',
      margin: 0
    }
  }, "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0437\u0430\xA0\u0440\u0435\u0431\u0451\u043D\u043A\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      fontSize: '19px',
      color: 'rgba(255,255,255,0.92)'
    }
  }, "\u0417\u0430\u0431\u043E\u0442\u0430, \u0442\u0451\u043F\u043B\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 \u0432 Telegram \u2014 \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u043D\u0430\u043B\u0438, \u043A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u0435\u043D\u044C \u043C\u0430\u043B\u044B\u0448\u0430."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sun",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    size: "lg"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u043C\u0435\u0441\u0442\u0430\u0445"))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
/* Чудо Садик — Programmes grid with category filter */
function Programs() {
  const {
    SectionHeading,
    FeatureCard,
    Tag
  } = window.DesignSystem_52b7c1;
  const {
    Ic
  } = window;
  const [filter, setFilter] = React.useState('Все');
  const cats = [{
    name: 'Все',
    dot: 'var(--ink-700)'
  }, {
    name: 'Речь и язык',
    dot: 'var(--cat-english)'
  }, {
    name: 'Движение',
    dot: 'var(--cat-dance)'
  }, {
    name: 'Творчество',
    dot: 'var(--cat-acting)'
  }, {
    name: 'Логика',
    dot: 'var(--cat-chess)'
  }];
  const programs = [{
    t: 'Английский язык',
    d: 'Живые занятия в игре — с самого раннего возраста.',
    i: 'languages',
    c: 'sky',
    g: 'Речь и язык'
  }, {
    t: 'Логопед-дефектолог',
    d: 'Чистая речь и индивидуальный подход к каждому.',
    i: 'mic',
    c: 'sun',
    g: 'Речь и язык'
  }, {
    t: 'Танцы',
    d: 'Музыка, ритм и радость движения.',
    i: 'music',
    c: 'pink',
    g: 'Движение'
  }, {
    t: 'Гимнастика',
    d: 'Здоровье, осанка и ловкость каждый день.',
    i: 'activity',
    c: 'sky',
    g: 'Движение'
  }, {
    t: 'Массаж (курс)',
    d: 'Оздоровительный курс под присмотром специалиста.',
    i: 'heart-handshake',
    c: 'mint',
    g: 'Движение'
  }, {
    t: 'Актёрское мастерство',
    d: 'Сцена, эмоции и уверенность в себе.',
    i: 'drama',
    c: 'orange',
    g: 'Творчество'
  }, {
    t: 'Развивающие игры',
    d: 'Каждый день — новое маленькое открытие.',
    i: 'puzzle',
    c: 'pink',
    g: 'Творчество'
  }, {
    t: 'Шахматы',
    d: 'Логика, внимание и первые победы.',
    i: 'crown',
    c: 'purple',
    g: 'Логика'
  }, {
    t: 'Робототехника',
    d: 'Первые шаги в технике и конструировании.',
    i: 'bot',
    c: 'mint',
    g: 'Логика'
  }];
  const shown = filter === 'Все' ? programs : programs.filter(p => p.g === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u041D\u0430\u0448\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F",
    title: "\u0414\u0435\u0432\u044F\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F",
    gradient: true
  }, "\u0412\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043C\u0430\u043B\u044B\u0448\u0443, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0442\u0438 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u043C, \u0437\u0434\u043E\u0440\u043E\u0432\u044B\u043C \u0438 \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '32px 0 36px'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.name,
    dot: c.dot,
    active: filter === c.name,
    onClick: () => setFilter(c.name)
  }, c.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(FeatureCard, {
    key: p.t,
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: p.i,
      size: 26
    }),
    title: p.t,
    color: p.c
  }, p.d)))));
}
window.Programs = Programs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

})();
