export default {
  "*.{ts,tsx,js,jsx}": ["npm run lint:fix:files --", "npm run format:files --"],
  "*.{json, css, md, html, yml, yaml}": ["npm run format:files --"],
};
