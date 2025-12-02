import React from 'react';
import Hero from '../Components/Hero/Hero';
import useGames from '../Hooks/useGames';
import Loading from './Loading';
import Error404 from './Error404';
import GameCard from '../Components/GameCard/GameCard';
import Container from '../Layout/Container';
import Newsletter from '../Components/Newsletter';
import AmazingFeatures from '../Components/AmazingFeatures/AmazingFeatures';
import AboutGamehub from '../Components/AboutGamehub/AboutGamehub';
import useTitle from '../Hooks/useTitle';
import useGsapScrollAnimation from '../Hooks/useGsapScrollAnimation';
import ReviewsCard from '../Components/ReviewsCard/ReviewsCard';

const Home = () => {
    useGsapScrollAnimation(); // activate animations

    // for changing Page title Dynamically.
    useTitle("Home");
    const { games, loading, error } = useGames();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error404 />
    }


    const featuredGames = games.slice(3, 7);
    // const FeatureReviews = reviews.slice(1, 4 );
    // console.log(featuredGames);

    return (
        <div className={"overflow-hidden"}>
            <Hero />

            <Container>

                <section>
                    <div className="divider py-10 text-primary uppercase font-bold text-3xl">popular games</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            featuredGames.map(game => <GameCard key={game.id} game={game}></GameCard>)
                        }
                    </div>
                </section>
                <section>
                    <div className="divider py-10 text-primary uppercase font-bold text-3xl"> </div>
                    <div className='grid grid-cols-1 gap-5'>
                        <AboutGamehub />
                    </div>
                </section>
                <section>
                    <div className="divider py-10 text-primary uppercase font-bold text-3xl">Amazing Features</div>
                    <div className='grid grid-cols-1 gap-5'>
                        <AmazingFeatures />
                    </div>
                </section>
                <section>
                    <div className="divider py-10 text-primary uppercase font-bold text-3xl">User Reviews</div>
                    <div className='grid grid-cols-1  gap-5'>
                        <ReviewsCard></ReviewsCard>
                    </div>
                </section>
            
                <section>
                    <div className="divider py-10 text-primary uppercase font-bold text-3xl"></div>
                    <div className='grid grid-cols-1 gap-5'>
                        <Newsletter></Newsletter>
                    </div>
                </section>

            </Container>
        </div>
    );
};

export default Home;