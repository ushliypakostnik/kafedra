import path from 'path';
import express from 'express';
import config from '../config';

const app = express();
const HTML_FILE = path.join(config.DIST_DIR, 'html/index.html');

if (config.STATIC_SERVE) {
  app.use(express.static(config.DIST_DIR));
}

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(config.PORT, () => {
  console.log(`App listening to ${config.PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
