//import AboutContent from "./AboutContent"

const About = () => {
  return (
    <div className="overflow-y-scroll h-screen ">
      <div className="flex justify-center mt-20 ">
      <div className="bg-green-200  w-[600px] text-center  p-5 rounded-lg">
        <div className="text-center text-4xl font-bold">
          <h2>අපි පිළිබඳව </h2>
        </div>
        <div className="text-center font-medium text-base">
          <p>
            මෙම app එක තුලින් ලංකාවේ සිටින සර්පයින් පිළිබඳව දැනුමක් ලබා දීම අරමුණ වේ. මෙය පරිශීලනය මගින් ලංකාවේ සිටින සර්පයින් වෙන් කර හඳුනා ගැනීමට මහජනයා හට මුලික දැනුමක් ලබා දීම අපගේ අරමුණයි. පරිසර සමතුලිතතාවයට බෙහෙවින් වැදගත් වන, ජෛව විද්යතමකව වැදගත් වන හා වෛද්‍ය විද්‍යාත්මකව වැදගත් වන සර්පයින් නිරපරාදේ මහජනයාගේ නොදැනුවත්කම තුලින් විනාශ වී යාම වැලැක්වීමට හැකිනම් අපට එය සතුටකි.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mt-6">විශේෂ ස්තුතිය </h3>
          <p className="text-lg">Sanoj Wijayasekara, රමේෂ් කරුණානායක ඇතුළු Protect our snakes අපේ සර්පයින් රැකගමු facebook සමුහයට</p>
          <p className="text-lg">චායාරුප හා තොරතුරු Protect our snakes අපේ සර්පයින් රැකගමු facebook සමුහයේ සාමාජිකයින්ගෙනි </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
