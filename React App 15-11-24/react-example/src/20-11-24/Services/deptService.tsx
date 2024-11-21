import axios from 'axios';

const BASE_URL:string|undefined = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
    throw new Error("API URL is not defined in the environment variables.");
  }

export interface Dept{
    deptno:number;
    dname:string;
    loc:string
}

// 1. Read All 
const getAllDepartments  =  async ():Promise<Dept[]> => {
    try {
        const response = await axios.get<Dept[]>(`${BASE_URL}?_sort=deptno`);
         //   const response = await axios.get<Dept[]>(`${BASE_URL}`);
        return response.data;
        console.log('Request URL:', `${BASE_URL}?_sort=deptno`);

      } catch (error) {
        console.error("Error fetching departments:", error);
        throw error; // Re-throw to let the calling function handle it if needed
      }
};

const getDeptById  =  async (id:number):Promise<Dept> => {
    const response = await axios.get<Dept>(`${BASE_URL}/${id}`);
    return response.data;
};
 
const createDept = async (deptObj:Dept): Promise<Dept> => {
    const response = await axios.post<Dept>(`${BASE_URL}`, deptObj);
    return response.data;
  };

const updateDept =   async(deptObj:Dept): Promise<Dept> => {
    const response = await axios.put<Dept>(`${BASE_URL}/${deptObj.deptno}`, deptObj);
    return response.data;
  };

 const deleteDept =  async (id: number): Promise<void> => { 
    try {
        await axios.delete(`${BASE_URL}/${id}`);
        console.log('Request URL:', `${BASE_URL}/${id}`);
      } catch (error) {
        console.error(`Error deleting department with ID ${id}:`, error);
        throw error;
      }
 };
 


export const deptService = {
    getAllDepartments,
    getDeptById,
    createDept,
    updateDept,
    deleteDept
};
   
