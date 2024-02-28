import { useEffect, useState } from 'react';
/**
 *
 */
function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(`${url}에 대한 fetch error : ${error}`);
      }
    };
    getData();
  }, []);

  return data;
}

export default useFetchData;
