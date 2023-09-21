import axios from "axios";

export const loginUserServive = async (ueserData) => {
  const response = await axios.post("api/auth/login", {
    ...ueserData,
  });

  if (response.status == 200 || response.status == 201) {
    const { encodedToken, foundUser } = response.data;

    return {
      user: foundUser,
      token: encodedToken,
    };
  }
};
