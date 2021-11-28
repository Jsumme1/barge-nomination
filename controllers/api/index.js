const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const nomRoutes = require("./nom-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/noms", nomRoutes);
router.use("/comments", commentRoutes);

module.exports = router;