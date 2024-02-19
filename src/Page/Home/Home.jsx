
import About from './About';
import Banner from './Banner';
import Portfolio from './Portfolio';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='flex flex-col gap-5 mx-5'>
           <Banner></Banner>
           <About></About>
           <Skill></Skill>
           <Portfolio></Portfolio>
        </div>
    );
};

export default Home;