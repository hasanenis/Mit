// quartz.config.mjs
export default {
  site: {
    base: "/",           // root path, Vercel’de kök dizin
    assetsDir: "_assets", // build sırasında CSS ve JS dosyalarının konumu
  },
  markdown: {
    linkStyle: "pretty", // [[wikilink]] ve .md linklerini HTML’e çevirir
    baseUrl: "/",        // site kökünden linkler oluştur
  },
  build: {
    outDir: "docs",      // Vercel Output Directory
    clean: true,         // build öncesi eski dosyaları temizle
  },
  server: {
    enableSPA: true,     // tek sayfa uygulaması için (SPA) yönlendirme
  },
  features: {
    syntaxHighlight: true, // Kod blokları için highlight
    latex: true,           // LaTeX desteği
  },
};
