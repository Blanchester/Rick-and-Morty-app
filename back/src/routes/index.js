const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const router = Router();

router.get("/onSearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res) => {
    
})


module.exports = router;