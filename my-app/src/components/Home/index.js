import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/letter_n.png'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ick Gray.
                <br />
                I love computer vision.
                </h1>
                <h2>Computer Vision Engineering Intern @ Evolv /<br />CS Honors Student @ UCF /<br />Aspiring ML & Computer Vision Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me!</Link>
            </div>
        </div>
    );
}

export default Home