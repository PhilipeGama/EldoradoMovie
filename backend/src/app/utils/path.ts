import { resolve } from "path";

export const __dirRoot = resolve(__dirname, '..', '..', '..');
export const fullStaticPath = 'http://localhost:4001/static/movies';
export const staticPath = resolve(__dirRoot, 'public', 'static', 'uploads');