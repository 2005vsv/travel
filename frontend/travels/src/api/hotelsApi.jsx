import axios from "axios";
export const hotelApi=async()=>{
    const baseurl='http://localhost:5000/api/hotels';
    try{
        const {data}=await axios.get(baseurl);
        return data;
    }
    catch(err)
    {
        return err;
    }
}