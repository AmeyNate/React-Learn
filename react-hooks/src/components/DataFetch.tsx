import React, { useEffect, useState } from 'react';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 m-4 border rounded shadow-md bg-white">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 m-4 border rounded shadow-md bg-white">Error: {error}</div>;
  }

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <h2 className="text-xl mb-2">Fetched Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="py-2">
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
