import Ads from "./Ads"
import Kraitswiper from "./kraitswiper";
import Pythonswiper from "./pythonswiper";

const Home = () => {
  return (
    <div className="  w-full h-screen overflow-y-scroll pb-[100px] overflow-x-hidden">
      <div className="lg:h-[600px]">
      <Ads/>
      </div>
      
      <h3 className="text-center text-lg pt-2  lg:text-4xl font-bold lg:pt-5">Sri lankan Snakes</h3>
      <p className="text-center text-base lg:text-lg font-semibold">ශ්‍රී ලංකාවේ සර්පයින් රැකගනිමු </p>
      <div className="pt-3">
        <h3 className="text-center text-lg lg:text-2xl font-bold lg:pt-8">වෙන් කර හඳුනාගත යුතු සර්පයින් </h3>
        <p className="text-center pt-1">ශ්‍රී ලංකාවේ බහුලව හමුවන , නමුත් තවමත් බොහෝදෙනාට වෙන්කර හදුනා ගැනීමට අපහසු සර්පයින් අතර පිඹුරා සහ පොළඟා , කරවලා සහ රදනකයා අයත් වෙයි .</p>
        <h3 className="text-center pt-3 font-bold pb-2">පිඹුරා සහ පොළඟා වෙන්කර හඳුනා ගැනීම</h3>
        <Pythonswiper/>
        <div className="pt-2  ">
        <h3 className="text-center pt-8 font-bold pb-2">කරවලා සහ රදනකයා වෙන්කර හඳුනාගැනීම </h3>
        <Kraitswiper/>
        </div>
      
      </div>
      </div>
  );
};

export default Home;