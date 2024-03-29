import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BookSection from './BookSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>This is helmet page</title>
            </Helmet>
            <Banner></Banner>
            <BookSection/>
        </div>
    );
};

export default Home;