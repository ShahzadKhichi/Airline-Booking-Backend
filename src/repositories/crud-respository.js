const { logger } = require("../config/index");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      console.log("model :", this.model);

      const res = await this.model.create(data);
      return res;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo :create", error);
      throw error;
    }
  }

  async destory(data) {
    try {
      const res = await this.model.destory({
        where: {
          id: data,
        },
      });
      return res;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo :destroy", error);
      throw error;
    }
  }

  async get(data) {
    try {
      const res = await this.model.findByPk(data);
      return res;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo :get", error);
      throw error;
    }
  }
  async getAll() {
    try {
      const res = await this.model.findALl();
      return res;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo :getAll", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const res = await this.model.update(data, { where: { id: id } });
      return res;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repo :update", error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
