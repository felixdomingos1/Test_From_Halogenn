// src/controllers/dataController.ts
import { Request, Response } from 'express';
import dataService from '../services/dataService';
const dataController = {
  async create(req: Request, res: Response) {
    try {
      const newData = await dataService.create(req.body);
      res.json(newData);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const allData = await dataService.getAll();
      res.json(allData);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default dataController;
