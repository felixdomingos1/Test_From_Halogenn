
import DataModel from '../entities/data';

const dataService = {
  async create(data: any) {
    return await DataModel.create(data);
  },
  async getAll() {
    try {
      
      const allData = await DataModel.find();
      console.log(allData);
       
      // return allData; 
    } catch (error) {
      console.error('Erro ao buscar todos os dados:', error);
      throw new Error('Erro ao buscar todos os dados');
    }
  }
  
};

export default dataService;
