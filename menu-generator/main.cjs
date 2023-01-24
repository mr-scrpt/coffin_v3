const path = require('node:path')
const fs = require('node:fs').promises

const generator = async (settings) => {
  const styleTpl = require('./template/style-template.cjs')(settings.options)
  const jsTpl = require('./template/js-template.cjs')(settings.options)
  try {
    const {
      dist,
      options: { name },
    } = settings
    console.log('name', name)
    // const { name } = options;
    await fs.writeFile(path.resolve(dist.style, `${name}.scss`), styleTpl)
    await fs.writeFile(path.resolve(dist.js, `${name}.js`), jsTpl)
  } catch (err) {
    console.error(err)
  }
}

module.exports = generator
