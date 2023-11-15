import { myDataSource } from '../app-data-source';
import { Result } from '../entities/result.entity';

const createResult = async (resultData: any) => {
  const newResult = myDataSource.getRepository(Result).create(resultData);
  return await myDataSource.getRepository(Result).save(newResult);
};

const getAllResults = async () => {
  return await myDataSource
    .getRepository(Result)
    .createQueryBuilder('result')
    .leftJoinAndSelect('result.student', 'student')
    .leftJoinAndSelect('result.course', 'course')
    .getMany();
};

const getResultById = async (id: any) => {
  return await myDataSource.getRepository(Result).findOne(id);
};

const updateResultById = async (id: any, updatedData: any) => {
  await myDataSource.getRepository(Result).update(id, updatedData);
  return await myDataSource.getRepository(Result).findOne(id);
};

const deleteResultById = async (id: any) => {
  const result = await myDataSource.getRepository(Result).delete(id);
  return result?.affected ?? 0 > 0;
};

export {
  createResult,
  getAllResults,
  getResultById,
  updateResultById,
  deleteResultById,
};