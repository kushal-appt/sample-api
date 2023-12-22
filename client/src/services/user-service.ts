import axios from "axios";
import { userDetailsType } from "../types";
import { userMessages } from "../messages/user-message";

export async function registerUser(data: userDetailsType): Promise<string> {
  const query = `
   
    
    `;

  const variables = {
    data,
  };

  const response = await axios.post("", { query, variables });
  if (response && response.data && response.status === 200) {
    if (response.data.errors) {
      throw new Error(response.data.errors[0].validations);
    }
    return response.data.data;
  }
  throw new Error(userMessages.VERIFY_REQUEST_API_ERR);
}
