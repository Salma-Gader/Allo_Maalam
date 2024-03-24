const HomeRouter = require("express").Router();
HomeRouter.get('/', (req, res) => {
   res.send('Hello, World!');
 });
module.exports = authRouter;