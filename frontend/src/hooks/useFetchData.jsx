import { useEffect, useState } from 'react';
import { token } from '../config';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true since we're loading data
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
      //  console.log(res,'response');
        if (!res.ok) {
          // Check if there's a message in the response body
          const result = await res.json();
          throw new Error(result.message || 'Something went wrong');
        }

        // Directly set data if the result itself is the array
        const result = await res.json();
        setData(result.data || result); // Adjust based on actual response structure
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // console.log(data, 'fetch data');
  return { data, loading, error };
};

export default useFetchData;
