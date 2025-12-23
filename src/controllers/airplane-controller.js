const { error } = require("winston");
const { AirplaneServices } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneServices.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane Created Successfully",
      error: {},
      data: {
        airplane,
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to create Airplane",
      error: error,
      data: {},
    });
    throw error;
  }
}

module.exports = {
  createAirplane,
};
