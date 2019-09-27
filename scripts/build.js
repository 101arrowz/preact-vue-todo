const Bundler = require('parcel-bundler');
const logger = require('@parcel/logger');
const path = require('path');
const pathTo = (...paths) => path.join(__dirname, '..', ...paths);
const paths = ['.', 'react', 'vue', 'preact'];
const build = async (outDir = 'dist', silent = false) => {
  for (const p of paths) {
    if (!silent)
      logger.persistent(logger.chalk.white(p === '.' ? 'Home page' : p.charAt(0).toUpperCase()+p.slice(1)+' version')+logger.chalk.reset(' is being bundled...'));
    const bundler = new Bundler(pathTo('public', p, 'index.html'), {
      watch: false,
      sourceMaps: false,
      detailedReport: !silent,
      scopeHoist: true,
      logLevel: silent ? 1 : 3,
      outDir: pathTo(outDir, p),
      minify: true,
      publicUrl: './'
    });
    await bundler.bundle();
    logger.lines = 0; // Allow persistence
    console.log();
  }
}
if (!module.parent)
  build();
module.exports = build;