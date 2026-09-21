import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { display: ['var(--font-space)'], sans: ['var(--font-inter)'] }, colors: { gold:'#FFB800', ink:'#0A0A0A', panel:'#141414' }, boxShadow: { glow:'0 0 40px rgba(255,184,0,.16)' } } }, plugins: [] };
export default config;
