import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    host: true
  },
  plugins: [
    {
      name: 'copy-standalone-scripts',
      closeBundle() {
        const files = ['verify.js', 'synedica-config.js', 'favicon.png', 'logo-sndy.png'];
        files.forEach(f => {
          if (fs.existsSync(f)) {
            fs.copyFileSync(f, resolve(__dirname, 'dist', f));
          }
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        porQueNos: resolve(__dirname, 'por-que-nos.html'),
        faleConosco: resolve(__dirname, 'fale-conosco.html'),
        termos: resolve(__dirname, 'termos.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
        faq: resolve(__dirname, 'faq.html'),
        controleDeQualidade: resolve(__dirname, 'controle-de-qualidade.html')
      }
    }
  }
});
