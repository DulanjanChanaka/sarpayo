
import "../Home/Ads.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import snakedata from "../../SnakeData/Data"
const Category = () => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }]
  };

  // Filter data based on poison type
  const filterDataByPoisonType = (poison) => {
    return snakedata.filter((data) => data.poison === poison);
  };

  return (
    <div className="w-full h-screen overflow-y-scroll pb-[100px] pt-[80px]">
      {/* Slider for Poison Type 1 */}
      
      <div className="mb-20 bg-green-200 pt-3">
      <h1 className="text-center text-2xl font-bold pb-3">උග්‍ර විෂ සර්පයින් </h1>
      <Slider {...settings}>
      
      {filterDataByPoisonType("1").map((data) => (
        <div key={data.id}>
          <div className="">
            
            <img src={data.photo} alt={`Poison Type 1 Image ${data.id}`} className="h-[400px] w-full rounded-lg" />
          </div>
          <div className="text-center font-semibold text-lg py-3">
              <h3>{data.name}</h3>
            </div>
        </div>
      ))}
    </Slider>
      </div>
  
<div className="mb-20 bg-green-200 pt-3"> 
<h1 className="text-center text-2xl font-bold pb-3">මද විෂ සර්පයින් </h1>
      {/* Slider for Poison Type 2 */}
      <Slider {...settings}>
        {filterDataByPoisonType("2").map((data) => (
          <div key={data.id}>
            <div>
              <img src={data.photo} alt={`Poison Type 2 Image ${data.id}`} className="h-[400px] w-full rounded-lg" />
            </div>
            <div className="text-center font-semibold text-lg py-3">
              <h3>{data.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
</div>
     

<div className="mb-20 bg-green-200 pt-3">
<h1 className="text-center text-2xl font-bold pb-3">සුළු විෂ සර්පයින්</h1>
      <Slider {...settings}>
        {filterDataByPoisonType("3").map((data) => (
          <div key={data.id}>
            <div>
              <img src={data.photo} alt={`Poison Type 2 Image ${data.id}`} className="h-[400px] w-full rounded-lg" />
            </div>
            <div className="text-center font-semibold text-lg py-3">
              <h3>{data.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
</div>
     
<div className="mb-10 bg-green-200 pt-3">
<h1 className="text-center text-2xl font-bold pb-3">නිර්විෂ සර්පයින්</h1>
      <Slider {...settings}>
        {filterDataByPoisonType("4").map((data) => (
          <div key={data.id}>
            <div>
              <img src={data.photo} alt={`Poison Type 2 Image ${data.id}`} className="h-[400px] w-full rounded-lg"/>
            </div>
            <div className="text-center font-semibold text-lg py-3">
              <h3>{data.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
</div>
      

      {/* Repeat the pattern for Poison Type 3 and 4 */}
    </div>
  );
};

export default Category;



