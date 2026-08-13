// Next.js's bundled types (node_modules/next/types/global.d.ts) only declare
// ambient modules for CSS Modules (`*.module.css/.scss/.sass`). Plain,
// non-module stylesheet side-effect imports (e.g. `import "./globals.css"`)
// have no matching module declaration, so the editor's TypeScript language
// service cannot resolve them. These wildcard declarations close that gap.
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
