const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '../public/index.html');
    const publicPath = express.static(path.join(__dirname, '../public'));
    app.use('/', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(indexPath));
    });
    return app
  }
};
