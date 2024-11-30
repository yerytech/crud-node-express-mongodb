import employeModel from '../models/employeModel.js';

class EmployeController {
  constructor() {}

  async create(req, res) {
    try {
      const data = await employeModel.create(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async delete(req, res) {
    const id = req.params;
    const data = await employeModel.delete(id);
    try {
      res.status(206).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    const id = req.params;

    try {
      const data = await employeModel.update(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAll(req, res) {
    const data = await employeModel.getAll();
    try {
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getOne(req, res) {
    const id = req.params;
    const data = await employeModel.getOne(id);
    try {
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async updateThat(req, res) {
    const id = req.params;
    try {
      const data = await employeModel.updateThat(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new EmployeController();