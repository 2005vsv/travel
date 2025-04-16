import axios from "axios";

export const SignUpApi = async ({ name, email, password,confirmpassword }) => {
  const url = "http://localhost:5000/api/users/signup"; // adjust if deployed

  try {
    const { data } = await axios.post(url, {
      name,
      email,
      password,
      confirmpassword
      
    });
    return data;
  } catch (err) {
    console.error("Booking error:", err);
    return err;
  }
};
