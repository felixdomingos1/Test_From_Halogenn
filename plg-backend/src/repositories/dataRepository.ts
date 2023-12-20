import DataModel, { IData } from '../entities/data';

export interface IDataDTO {
   nome: string;
   valor: number;
   nota: string;
 }
class DataRepository {
  async create(data: IDataDTO): Promise<IData> {
    return DataModel.create(data);
  }
  async get(): Promise<IData[]> {
      const allData = await DataModel.find(); // Busca todos os dados usando o modelo
      return allData; // Retorna todos os dados recuperados
    }
}

export default new DataRepository();