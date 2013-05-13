const COUNTRY          = 'au'
    , npmMaintainers   = require('npm-maintainers')
    , ignoreUsers      = require('./ignoreusers')
    , npmGithubMapping = require('./npmgithubmapping')

module.exports = npmMaintainers.bind(null, {
    country: COUNTRY
  , ignoreUsers: ignoreUsers
  , npmGithubMapping: npmGithubMapping
})