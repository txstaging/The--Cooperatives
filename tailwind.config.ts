import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the "transformix-2" Figma file.
 * Colors are defined as RGB channels in `src/styles/globals.css` so that
 * Tailwind's opacity modifiers (e.g. `border-brand-deep/20`) keep working.
 */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: token("brand"),
          strong: token("brand-strong"),
          deep: token("brand-deep"),
        },
        ink: {
          DEFAULT: token("ink"),
          soft: token("ink-soft"),
        },
        content: {
          primary: token("text-primary"),
          secondary: token("text-secondary"),
          muted: token("text-muted"),
          inverse: token("text-inverse"),
        },
        surface: {
          DEFAULT: token("surface"),
          card: token("surface-card"),
          tint: token("surface-tint"),
          muted: token("surface-muted"),
          highlight: token("surface-highlight"),
        },
        line: {
          DEFAULT: token("border"),
          strong: token("border-strong"),
          neutral: token("border-neutral"),
          soft: token("border-soft"),
          subtle: token("border-subtle"),
          inverse: token("border-inverse"),
        },
        mint: {
          DEFAULT: token("mint"),
          light: token("mint-light"),
          lighter: token("mint-lighter"),
          outline: token("mint-outline"),
          pale: token("mint-pale"),
        },
        gold: token("gold"),
        slate: token("slate"),
        footer: {
          DEFAULT: token("footer"),
          text: token("footer-text"),
          link: token("footer-link"),
          copy: token("footer-copy"),
        },
        cta: {
          from: token("cta-from"),
          to: token("cta-to"),
          body: token("cta-body"),
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        kufi: ["var(--font-kufi)", "var(--font-tajawal)", "sans-serif"],
      },
      fontSize: {
        caption: ["11px", { lineHeight: "19.25px" }],
        "label-xs": ["12px", { lineHeight: "20.4px" }],
        "label-sm": ["13px", { lineHeight: "22.75px" }],
        "body-sm": ["14px", { lineHeight: "22.75px" }],
        body: ["16px", { lineHeight: "28px" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "title-sm": ["19px", { lineHeight: "32.3px" }],
        title: ["24px", { lineHeight: "1.6" }],
        "symbol-sm": ["25px", { lineHeight: "43.75px" }],
        "heading-sm": ["32px", { lineHeight: "42px" }],
        "heading-md": ["40px", { lineHeight: "1.6" }],
        stat: ["42px", { lineHeight: "73.5px" }],
        heading: ["48px", { lineHeight: "1.3" }],
        cta: ["49px", { lineHeight: "58.8px", letterSpacing: "-1.4px" }],
        display: ["56px", { lineHeight: "1.55", letterSpacing: "-2px" }],
        "display-lg": ["58px", { lineHeight: "68.44px", letterSpacing: "-1.2px" }],
        numeral: ["68px", { lineHeight: "1" }],
      },
      maxWidth: {
        container: "1240px",
        wide: "1250px",
      },
      height: {
        header: "82px",
        "header-mobile": "72px",
      },
      borderRadius: {
        sm: "7px",
        md: "9px",
        lg: "12px",
        xl: "17px",
        "2xl": "18px",
        "3xl": "20px",
        "4xl": "22px",
        "5xl": "24px",
        "6xl": "35px",
      },
      borderWidth: {
        hairline: "0.5px",
        thin: "1.111px",
      },
      backgroundImage: {
        "cta-gradient":
          "linear-gradient(110.35deg, rgb(var(--color-cta-from)) 0%, rgb(var(--color-cta-to)) 100%)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
