const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
