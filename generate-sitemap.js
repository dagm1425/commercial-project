import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import projects from './src/data/projects.js';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.asaitaproperties.com.et';
const staticPages = ['/', '/about', '/contact', '/projects'];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  staticPages.forEach(page => {
    sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
  });

  projects.forEach(project => {
    sitemap.write({
      url: `/projects/${project.id}`,
      changefreq: 'weekly',
      priority: 0.9
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml.toString());
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();
