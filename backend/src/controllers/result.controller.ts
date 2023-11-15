import { Request, Response } from 'express';
import * as resultService from '../services/result.service';
import { ResultDTO, UpdateResultDTO } from '../dtos/result.dto';

const createResult = async (req: Request, res: Response) => {
  try {
    const newResult = await resultService.createResult(req.body as ResultDTO);
    res.json(newResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllResults = async (_: Request, res: Response) => {
  try {
    const results = await resultService.getAllResults();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getResultById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await resultService.getResultById(id);
    if (!result) {
      res.status(404).json({ message: 'Result not found' });
    } else {
      res.json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateResultById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedResult = await resultService.updateResultById(id, req.body as UpdateResultDTO);
    if (!updatedResult) {
      res.status(404).json({ message: 'Result not found' });
    } else {
      res.json(updatedResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteResultById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await resultService.deleteResultById(id);
    if (!success) {
      res.status(404).json({ message: 'Result not found' });
    } else {
      res.json({ message: 'Result deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export {
  createResult,
  getAllResults,
  getResultById,
  updateResultById,
  deleteResultById,
};