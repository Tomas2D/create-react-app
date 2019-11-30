'use strict';

const paths = require('./paths');

module.exports = useTypeScript => {
  const keys = ['prettierConfig', 'templateSrc', 'template'];
  for (const key of keys) {
    if (useTypeScript) {
      paths[key].replace('/template/', '/template-typescript/');
    } else {
      paths[key].replace('/template-typescript/', '/template/');
    }
  }
};
