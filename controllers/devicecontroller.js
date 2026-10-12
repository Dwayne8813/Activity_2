import { Device } from "../models/Device.js";

const devicecontroller = {
  all: async (req, res) => {
    const data = await Device.findAll();
    res.json(data);
  },

  insert: async (req, res) => {
    const { name, deviceType, brand, model, status } = req.body;
    const data = await Device.create({ name, deviceType, brand, model, status });
    res.json(data);
  },

  one: async (req, res) => {
    const data = await Device.findByPk(req.params.id);
    res.json(data);
  },

  update: async (req, res) => {
    const { name, deviceType, brand, model, status } = req.body;

    await Device.update(
      { name, deviceType, brand, model, status },
      { where: { id: req.params.id } }
    );

    const data = await Device.findByPk(req.params.id);
    res.json(data);
  },

  delete: async (req, res) => {
    await Device.destroy({ where: { id: req.params.id } });
    res.json({ message: "deleted" });
  },
};

export { devicecontroller };