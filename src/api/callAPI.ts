import API from "../utility/api-request";

const methodAPI = {
    getAll: () => {
        return API.get('/thunk');
    },
    getById: (userId: any) => {
        return API.get(`/thunk/${userId}`);
    },
    postElement: (element: any)=>{
        return API.post(`/thunk`,element);
    },
    deleteById: (userId: any) =>{
        return API.delete(`/thunk/${userId}`);
    },
    updateById: (userId:any,data:any) =>{
        return API.put(`/thunk/${userId}`,data);
    }
};

export default methodAPI;