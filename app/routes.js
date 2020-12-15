const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Passing data into a page
router.get('/add-academies', function (req, res) {
  res.render('add-academies', { name: 'Foo' })
})

// Branching
router.post('/incoming', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const identified = req.session.data['identified']


  if (identified === 'yes') {
    res.redirect('/incoming')
  } else {
    res.redirect('/summary')
  }
})


module.exports = router
