const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  req.app.locals.db.query(
    "SELECT TOP 10 * FROM RSCs",
    function (err, recordset) {
      if (err) {
        console.error(err);
        res.status(500).send("SERVER ERROR");
        return;
      }
      res.status(200).json({ message: "success", data: [recordset] });
    }
  );
});

module.exports = router;
