import { useRouter } from 'next/router';

const DynamicPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Dynamic Page for ID: {id}</h1>;
};

export default DynamicPage;