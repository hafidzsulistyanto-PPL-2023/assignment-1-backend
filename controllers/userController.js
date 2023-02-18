const userModel = require('../models/userModel')

module.exports.getUser = async (req, res) => {
  const user = await userModel.find()
  res.send(user)
}

module.exports.saveUser = (req, res) => {
  const { name } = req.body

  userModel
    .create({ name })
    .then((data) => {
      console.log('Added Successfully...')
      console.log(data)
      res.send(data)
    })
    .catch((err) => console.log(err))
}
