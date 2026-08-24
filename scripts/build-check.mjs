import {access,readFile} from 'node:fs/promises';
for (const f of ['index.html','src/main.js','src/style.css','src/services/api.js','src/analysis/flood.js','src/ai/agent.js']) await access(f);
const html=await readFile('index.html','utf8'); if(!html.includes('src/main.js')) throw Error('entry missing');
console.log('Static build check passed');
