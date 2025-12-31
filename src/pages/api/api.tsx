import axios from "axios";

export const getAPI = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response && response.data && response.status == 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (error: any) {
    console.log("ERROR", error);
    errorHandling(error);
    return error;
  }
};

export const postAPI = async (url: string, data: object) => {
  try {
    const response = await axios.post(url, data);
    if (response && response.data && response.status == 200) {
      return response.data;
    } else {
      console.log(response);
    }
    return response;
  } catch (error: any) {
    console.log("ERROR", error);
    errorHandling(error);
    return error;
  }
};

export const patchAPI = async (url: string, data: object) => {
  try {
    const response = await axios.patch(url, data);
    if (response && response.data && response.status == 200) {
      return response.data;
    } else {
      console.log(response);
    }
    return response;
  } catch (error: any) {
    console.log("ERROR", error);
    errorHandling(error);
    return error;
  }
};

export const deleteAPI = async (url: string, params?: object) => {
  try {
    const response = await axios.delete(url, { params });
    if (response && response.data && response.status == 200) {
      return response.data;
    } else {
      console.log(response);
    }
    return response;
  } catch (error: any) {
    console.log("ERROR", error);
    errorHandling(error);
    return error;
  }
};

const errorHandling = (error: any) => {
  const msg = error.message
    ? error.message
    : error.response.message
    ? error.response.message
    : "error!!";
  console.log(msg);
};
