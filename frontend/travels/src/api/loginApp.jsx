import axios from "axios";
export const LoginApi=async({email,password})=>{
    const url="http://localhost:5000/api/users/login";
    try 
    {
        const {data}=await axios.post(url,{
            email:email,
            password:password
        });
        return data;
    }
    catch(err)
    {
        return err;
    }
}