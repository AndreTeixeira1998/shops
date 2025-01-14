const fs = require('fs');
const fetch = require('node-fetch');

const site = process.argv[2];
const urlFile = process.argv[3];
const excludes = process.argv[4]?.split(',') || [];
const statusFile = 'data/' + process.argv[3] + '_status.csv';

(async () => {
  try {
    fs.unlinkSync(statusFile);
  } catch {}

  const paths = fs.readFileSync('data/' + urlFile, 'utf8').split('\n');
  for (const path of paths) {
    const shouldSkip = excludes.some((exclude) => path.indexOf(exclude) > -1);
    if (shouldSkip) {
      continue;
    }
    const url = site + path;
    const res = await fetch(url);
    if (res.ok) {
      // console.log(res.status, path);
    } else {
      console.error(res.status, path);
    }
    fs.appendFile(statusFile, `${path}, ${res.status}\n`, function (err) {
      if (err) throw err;
    });
  }
})();
