import axios from "axios";
export const AdminApi=async()=>{
    const baseurl='http://localhost:5000/api/admin';
    try{
        const {data}=await axios.get(baseurl);
        return data;
    }
    catch(err)
    {
        return err;
    }
}