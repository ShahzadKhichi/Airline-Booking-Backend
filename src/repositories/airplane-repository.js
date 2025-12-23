const { Airplane } = require("../models");
const CrudRepository = require("./crud-respository");

class AirplaneRespository extends CrudRepository {
  constructor() {
    console.log(Airplane);

    super(Airplane);
  }
}

module.exports = AirplaneRespository;
