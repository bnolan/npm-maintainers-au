npm-maintainers-au
==================

A utility to fetch and collate a list of Australian npm package maintainers. Uses data collected daily at <https://github.com/polyhack/npm-github-data>. Collected by [npm-github-data-collector](https://github.com/polyhack/npm-github-data-collector).

See **[npm-maintainers](https://github.com/polyhack/npm-maintainers)** for the core logic behind this package and what kind of data is returned. This is a simple wrapper that provides an Australian list.

```js
var npmMaintainersAu = require('npm-maintainers-au')
npmMaintainersAu(function (err, data) {
  // ...
})
```

## Licence

npm-maintainers is Copyright (c) 2012 Rod Vagg [@rvagg](https://twitter.com/rvagg) and the #polyhack team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
