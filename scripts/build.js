const Bundler = require('parcel-bundler');
const logger = require('@parcel/logger');
const path = require('path');
const pathTo = (...paths) => path.join(__dirname, '..', ...paths);
const paths = ['.', 'react', 'vue', 'preact'];
const build = async (outDir = 'dist', prod = (process.env.NODE_ENV === 'production'), silent = false) => {
  for (const p of paths) {
    if (!silent)
      logger.persistent(logger.chalk.white(p === '.' ? 'Home page' : p.charAt(0).toUpperCase()+p.slice(1)+' version')+logger.chalk.reset(' is being bundled...'));
    const bundler = new Bundler(pathTo('public', p, 'index.html'), {
      watch: !!module.parent && !prod,
      detailedReport: !silent,
      sourceMaps: !prod,
      scopeHoist: prod,
      logLevel: silent ? 1 : 3,
      outDir: pathTo(outDir, p),
      minify: prod,
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