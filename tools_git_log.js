const fs = require('fs');
const cp = require('child_process');
const output = cp.execSync('git log --pretty=format:"%h | %s" -n 30').toString();
fs.writeFileSync('gitlog.txt', output, 'utf8');
