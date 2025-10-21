// quartz.config.mjs
export default {
  site: {
    base: "/",           
    assetsDir: "_assets", // CSS/JS assetleri
  },
  markdown: {
    linkStyle: "pretty", // [[wikilink]] ve .md linklerini HTML’e çevir
    baseUrl: "/",        
  },
  build: {
    outDir: "docs",      // Vercel output directory
    clean: true,         // eski build dosyalarını temizle
  },
  content: {
    dir: "content",      // senin Vault'un buradan alınacak
  },
  server: {
    enableSPA: true,     // SPA yönlendirme
  },
  features: {
    syntaxHighlight: true, // kod blokları için
    latex: true,           // LaTeX desteği
  },
};
