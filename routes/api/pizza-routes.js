const router = require("express").Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/pizza-controller");

// set up get all and post at /api/pizzas
router.route("/").get(getAllPizza).post(createPizza);

// set up GET one, PUT, and DELETE at /api/puzzas/:id
router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
