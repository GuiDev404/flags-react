import axios from "./config";

async function fetchData({ url = '' } = {}) {
  try {
    const response = await axios.get(url);
    return response.data;

  } catch (error) {
    console.log(error);
  }
}

export default fetchData;