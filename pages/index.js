import useSWR from "swr";

export default function HomePage() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) {
    return <div>Error loading products</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <h2>
        {data.profession}, Age:{data.age}
      </h2>
      <p>
        {data.twitterName} and geohash: {data.geohash}
      </p>
    </div>
  );
}
