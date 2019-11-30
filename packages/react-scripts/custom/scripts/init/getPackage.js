'use strict';

const path = require('path');
const fs = require('fs-extra');
const paths = require('../../config/paths');

const getPackage = () => {
  const templateDependenciesPath = path.resolve(paths.template, 'package.json');
  const pkg = require(templateDependenciesPath);
  const pkgCopy = { ...pkg };

  fs.removeSync(templateDependenciesPath);

  return pkgCopy;
};

module.exports = getPackage;
