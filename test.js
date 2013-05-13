const assert           = require('assert')
    , npmMaintainersAu = require('./')

npmMaintainersAu(function (err, data) {
  assert(!err, 'no error')
  assert(data.length > 100, 'enough data')
  var rvagg, i
  for (i = 0; i < data.length; i++) {
    if (data[i].githubLogin == 'rvagg') {
      rvagg = data[i]
    }
  }
  assert(rvagg, 'have rvagg entry')
  assert.equal(rvagg.npmLogin, 'rvagg', 'correct npmLogin')
  assert.equal(rvagg.user_lc, 'rvagg', 'correct username_lc')
  assert(/Australia/.test(rvagg.location), 'correct location')
  assert.equal(rvagg.blog, 'http://rod.vagg.org', 'correct blog')
  assert(/https:.*gravatar.*/.test(rvagg.avatar), 'correct avatar')
  assert.equal(rvagg.email, 'rod@vagg.org', 'correct email')
  assert.equal(rvagg.company, 'X\'Prime Pty Ltd', 'correct company')
  assert.equal(rvagg.hireable, true, 'hireable')
  assert.equal(rvagg.githubUrl, 'https://github.com/rvagg', 'correct github url')
  assert(rvagg.packages.length >= 90, 'correct packages length')
  assert(rvagg.fetched instanceof Date, 'has fetched')
/*
  { githubLogin: 'rvagg',
    npmLogin: 'rvagg',
    user_lc: 'rvagg',
    name: 'Rod Vagg',
    location: 'South Coast NSW, Australia',
    blog: 'http://rod.vagg.org',
    avatar: 'https://secure.gravatar.com/avatar/026f5af604a336a38301639027757f29?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    email: 'rod@vagg.org',
    company: 'X\'Prime Pty Ltd',
    hireable: true,
    githubUrl: 'https://github.com/rvagg',
    packages: []
    fetched: Mon May 13 2013 14:51:00 GMT+1000 (EST) },
*/
})

console.log('No failures? No worries!')