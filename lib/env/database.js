const { MongoClient } = require("mongodb");
const _ = require("lodash");
const configFile = require("./configFile");

module.exports = {
  async connect() {
    const config = await configFile.read();
    const url = _.get(config, "mongodb.url");
    const options = _.get(config, "mongodb.options");

    if (!url) {
      throw new Error("No `url` defined in config file!");
    }

    const client = await MongoClient.connect(
      url,
      options
    );

    return client;
  }
};
