import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { INews } from "../libs/interfaces";

const fetch = async () => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.data;
    return data;
  } catch (err: any) {
    console.log(err?.response?.data);
  }
};

function useNews() {
  const { isLoading, error, data } = useQuery<INews>([], fetch, {
    retry: 3,
    retryDelay: 1000,
  });

  return {
    isLoading: isLoading && !!!error,
    data: data,
  };
}

export default useNews;
