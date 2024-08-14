import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Banner.css';
import '../CSS/Pillar.css';
import '../CSS/welcome.css';
import '../CSS/Slider.css';
import '../CSS/Seller.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTractor, faShieldAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTruck, faPercent, faUserShield, faExchangeAlt, faCalculator, faHeadset, faRupeeSign, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import relianceLogo from '../components/images/NS.avif';
import nilonsLogo from '../components/images/saahas.webp';
import metroLogo from '../components/images/coastel.webp';
import motherDairyLogo from '../components/images/diamond.jpeg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const features = [
  {
    icon: faTruck,
    title: 'Sell Across TamilNadu',
    description: 'Reach over 50 crore+ customers across 27000+ pincodes'
  },
  // ... other features
  {
    icon: faPercent,
    title: 'Higher Profits',
    description: 'With 0% commission*, you take 100% profits with you'
  },
  {
    icon: faUserShield,
    title: 'Account Management',
    description: 'Our dedicated managers will help your business on Farm2Factory'
  },
  {
    icon: faExchangeAlt,
    title: 'Lower Return Charges',
    description: 'With our flat and low return charges, ship your products stress-free'
  },
  {
    icon: faCalculator,
    title: 'Simple Pricing Calculator',
    description: 'Use our simple pricing calculator to decide the best and competitive selling price for your product'
  },
  {
    icon: faHeadset,
    title: '24×7 Seller Support',
    description: 'All your queries and issues are answered by our dedicated Seller Support Team'
  },
  {
    icon: faRupeeSign,
    title: 'Fast & Regular Payments',
    description: 'Get payments as fast as 7-10 days from the date of dispatch'
  },
  {
    icon: faMobileAlt,
    title: 'Business on the go',
    description: 'Download our Farm2Factory Seller App to manage your business anywhere, anytime'
  }
];

const pillars = [
  {
    icon: faCogs,
    title: 'Largest integrated value chain',
    description: "It's our equity and compensation policies, our promises to customers, or use of state-of-the-art technologies to make trust tangible, Farm2Factory has been leading the way on all fronts."
  },
  // ... other pillars
  {
    icon: faTractor,
    title: 'Farm-to-fork traceability',
    description: 'Our farmers see what happens with their produce after it leaves their farm, and our consumers see details about their food, their farmer, and what happens with the money they pay.'
  },
  {
    icon: faUserFriends,
    title: 'Farmer-led initiative',
    description: 'Sahyadri Farms is an initiative fully led and managed by farmers who have complete understanding of the problems faced by small-landholding farmers.'
  }
];

const customerLogos = [
  { img: relianceLogo, alt: 'Reliance Retail' },
  
  { img: nilonsLogo, alt: 'Nilons' },
  { img: metroLogo, alt: 'Metro' },
  { img: motherDairyLogo, alt: 'Mother Dairy' },
  // ... other logos
];

const UserBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const cardStyle = {
    maxWidth: 345,
    margin: '20px',
  };

  const textContainerStyle = {
    flex: '1',
    paddingRight: '20px'
  };

  const imageContainerStyle = {
    flex: '1',
    textAlign: 'center'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto'
  };

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          
          <div className="video-container">
            <video className="banner-video" autoPlay muted loop>
              <source src="/856065-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="banner-text">
              <h1>Welcome to Farm2Factory</h1>
              <p>Transforming agricultural waste into valuable resources. Join us in creating a sustainable future by turning farm waste into factory materials.</p>
            </div>
          </div>
          <div className="video-container">
            <video className="banner-video" autoPlay muted loop>
              <source src="/3783928-hd_1920_1080_24fps.mp4" type="video/mp4" />
            </video>
            <div className="banner-text">
              <h1>Welcome to Farm2Factory</h1>
              <p>Help us build a sustainable future by converting farm waste into essential factory materials. Join our mission to transform agricultural by-products into valuable assets for industry.</p>
            </div>
          </div>
        </Slider>
      </div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="mm">
      <div className="pillars-section">
        <h2>Pillars of Farm2Factory</h2>
        <div className="pillars-container">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <FontAwesomeIcon icon={pillar.icon} size="3x" color="#1B5E20" />
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
      
      </Container>
    </React.Fragment>
      <div className='about-container'>
        <section className='about-content'>
          <div className='about-section'>
            <div className='text'>
              <h2>About farm2factory</h2>
              <p>
                Farm2Factory is India’s largest integrated platform for fruits and vegetables. Our unique inclusive partnership with farmers has built a strong capability over the years in areas of primary processing of fruits and vegetables, semi-processed products like frozen & aseptic; processed products like fruit jams; tomato ketchup; fruit beverages and fruit & vegetable waste processing under an integrated zero discharge processing facility.
              </p>
              <p>
                Farm2Factory began with the mission to ensure that the small-landholding farmers of India are given fair compensation for their produce and labour. This was to be achieved while ensuring that we adhere to global standards of agricultural practices, world-class infrastructure, international food safety standards, and the will to deliver safe, hygienic, and healthy food to our consumers.
              </p>
            </div>
            <div className='image'>
              <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" alt="Farm2Factory Infrastructure" style={imageStyle} />
            </div></div>
          <div className='about-section reverse'>
            <div className='text'>
              <h2>Infrastructure and Technology</h2>
              <h3>Infrastructure</h3>
              <p>
                We invite you to visit our world-class infrastructure at Mohadi, Nashik, where we have installed state-of-the-art facilities to ensure that we work at necessary scales and guarantee safety and quality to our customers.
              </p>
              <h3>Technology</h3>
              <p>
                Right from ensuring that our farmers receive complete monitoring of growing practices to implementation of SAP, right from using 100% real-time traceable supply chain software to give transparency to our farmers and consumers, we have ensured that technology is encoded in our DNA.
              </p>
            </div>
            <div className='image'>
              <img src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?cs=srgb&dl=pexels-pixabay-162539.jpg&fm=jpg" alt="Farm2Factory Technology" style={imageStyle} />
            </div>
          </div>
        </section>
      </div>
      <div className="why-sell-section">
        <h2>Why sell on Farm2Factory?</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <Card key={index} style={cardStyle}>
              <CardContent>
                <FontAwesomeIcon icon={feature.icon} size="3x" />
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <section className="our-customers">
        <Typography variant="h5" align="center">Our Esteemed Customers</Typography>
        <div className="carousel-container">
          <Slider {...setting}>
            {customerLogos.map((logo, index) => (
              <div key={index} className="carousel-slide">
                <img src={logo.img} alt={logo.alt} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default UserBanner;
