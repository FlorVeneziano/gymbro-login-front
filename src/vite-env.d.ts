/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
