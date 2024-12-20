export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return { props: { data } };
}

const Page = ({ data }: { data: any }) => {
    return <div>{JSON.stringify(data)}</div>;
};

export default Page;
