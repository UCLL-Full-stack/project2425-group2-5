import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserData: React.FC = () => {
    const { data, error, isLoading } = useSWR('/api/user', fetcher);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <div>{data ? `Hello, ${data.name}` : 'No user data found.'}</div>;
};

export default UserData;
