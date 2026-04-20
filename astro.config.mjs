import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isUserOrOrgPagesRepo =
  owner.length > 0 && repo.length > 0 && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

// In GitHub Pages project repos, the app is served from /<repo>/.
const base = isGitHubActions && repo && !isUserOrOrgPagesRepo ? `/${repo}/` : '/';
const site = isGitHubActions && owner ? `https://${owner}.github.io` : 'https://limitlesschurch.local';

export default defineConfig({
  site,
  base,
  server: {
    host: true,
    port: 4321
  }
});
