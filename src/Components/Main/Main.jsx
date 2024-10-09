import React,{useEffect} from "react";
import "./main.css";
import './main.scss';  // Ensure the file extension is .scss, not .css

import img from "../../Assets/Assets/borabora.jpeg";
import img2 from "../../Assets/Assets/maldives.jpeg"
import img3 from "../../Assets/Assets/santorini.jpeg"
import img4 from "../../Assets/Assets/machupicchu.jpeg"
import img5 from "../../Assets/Assets/kyotojapan.jpeg"
import img6 from "../../Assets/Assets/banffcanada.jpeg"
import img7 from "../../Assets/Assets/parisfrance.jpeg"
import img8 from "../../Assets/Assets/phuketthailand.jpeg"
import img9 from "../../Assets/Assets/grandcanonusa.jpeg"
import img10 from "../../Assets/Assets/bali.jpeg"
import img11 from "../../Assets/Assets/tajmahal.jpeg"
import { GrAed } from "react-icons/gr";
import { FaEyeSlash } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities",
  },
  

  {
    id: 2,
    imgSrc: img2, // Replace with an actual image source
    destTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'BEACH LUXURY',
    fees: '$1200',
    description: 'Known for its crystal-clear waters and vibrant marine life, Maldives is a tropical paradise perfect for relaxing and exploring its beautiful coral reefs and beaches.'
  },

  {
    id: 3,
    imgSrc: img3, // Replace with actual image source
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC RELAX',
    fees: '$850',
    description: 'Santorini is famous for its whitewashed buildings and breathtaking sunsets. It’s the perfect destination for honeymooners and romantic getaways.'
  },

  {
    id: 4,
    imgSrc: img4, // Replace with actual image source
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'HISTORICAL ADVENTURE',
    fees: '$950',
    description: 'Machu Picchu, an ancient Incan city set high in the Andes Mountains, offers a mystical and adventurous travel experience for history buffs and hikers.'
  },


  {
    id: 5,
    imgSrc: img5, // Replace with actual image source
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL DISCOVERY',
    fees: '$650',
    description: 'Kyoto is known for its stunning temples, traditional tea houses, and beautiful cherry blossoms, making it a perfect destination for cultural immersion.'
  },

  {
    id: 6,
    imgSrc: img6, // Replace with actual image source
    destTitle: 'Banff National Park',
    location: 'Canada',
    grade: 'NATURE ADVENTURE',
    fees: '$500',
    description: 'Banff National Park is a nature lover’s dream, with stunning landscapes, crystal-clear lakes, and endless outdoor activities like hiking and skiing.'
  },


   {
    id: 7,
    imgSrc: img7, // Replace with actual image source
    destTitle: 'Paris',
    location: 'France',
    grade: 'URBAN CULTURE',
    fees: '$1000',
    description: 'Paris, the city of love, is known for its art, architecture, and culinary delights, attracting millions of visitors each year for its urban sophistication.'
  },


  {
    id: 8,
    imgSrc: img8, // Replace with actual image source
    destTitle: 'Phuket',
    location: 'Thailand',
    grade: 'BEACH FUN',
    fees: '$400',
    description: 'Phuket is a tropical haven, offering vibrant nightlife, stunning beaches, and an array of water sports for thrill-seekers and beach lovers alike.'
  },

  {
    id: 9,
    imgSrc: img9, // Replace with actual image source
    destTitle: 'Grand Canyon',
    location: 'USA',
    grade: 'NATURE WONDER',
    fees: '$300',
    description: 'The Grand Canyon is one of the world’s most iconic natural landmarks, offering awe-inspiring views, hiking, and rafting opportunities for adventurers.'
  },

  {
    id: 10,
    imgSrc: img10, // Replace with actual image source
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'TROPICAL ESCAPE',
    fees: '$750',
    description: 'Bali is an island paradise that offers stunning beaches, lush forests, and vibrant culture, making it a top destination for relaxation and adventure.'
  },
  {
    id: 11,
    imgSrc: img11, // Replace with actual image source
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'HISTORICAL LANDMARK',
    fees: '$500',
    description: 'The Taj Mahal, one of the world’s most iconic monuments, stands as a symbol of love and is admired for its breathtaking Mughal architecture and beautiful marble work.'
}


];


const Main = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos= "fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {/* here we are going to use high order array method(map). To do that we shall use a list of object in one array. I am going to create an array named data and
        from that we shall .map() array to fetch each destination at once. */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos= "fade-up" className="singleDestination">
                {/* here u will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
