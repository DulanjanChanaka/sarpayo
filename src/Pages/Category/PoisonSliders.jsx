// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import Data from "../../SnakeData/Data";
// import { Grid, Navigation } from "swiper";
// import { IconButton } from "@mui/material";

 
// const PoisonSliders = ({title, rawsCount, slidesPerView, poisonType}) => {  
// const filteredData = Data.filter((Data) => Data.poison === poisonType);
//     return (
//       <section className="w-full mt-1 pb-8">
//           <h1 style={{ fontSize:"20px" , padding:"10px 100px 10px 130px", margin:"0px 30px 0px 30px", fontWeight:"900" ,backgroundColor:"green", display:"flex ", flexDirection:"raw", borderRadius:"25px", textAlign: "center"}}>{title}</h1>
//           <Swiper
//           slidesPerView={Number(slidesPerView)}
//           grid={{
//             rows: Number(rawsCount),
//           }}
//           spaceBetween={30}
//           navigation={true}
//           modules={[Grid, Navigation]}
//           className="mySwiper"
//         >
//           {filteredData.map(({photo, name}, id)=>
//           <SwiperSlide key={id} >
//               <PoisonUnit 
//               photo={photo} 
//               name={name} 
//               id={id}
//                />
//           </SwiperSlide>
//           )}
  
//         </Swiper>
//       </section>
//     )
//   }

//   const PoisonUnit = ({photo, name ,id}) =>
// <div style={{ backgroundColor:"rgb(197, 223, 174)",  borderRadius:"25px", margin:"20px 20px 50px 20px ", padding:"10px 0px 0px 8px " }}
// >
//   <IconButton sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}

// >
//     <img src={photo} alt={`snake${id}` } style={{ width:"300px", height:"300px", borderRadius:"25px"}}/>
//     <h3 className="text-base  p-2 pb-7 font-semibold text-stone-900 ">{name}</h3>
//     </IconButton>
    

// </div>

// export default PoisonSliders;