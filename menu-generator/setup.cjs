const generator = require('./main.cjs')

const settings = {
  dist: {
    js: '../src/js/module/',
    style: '../src/style/nav/',
  },
  options: {
    name: 'adaptive',
    bp: 994,
  },
}

generator(settings)
