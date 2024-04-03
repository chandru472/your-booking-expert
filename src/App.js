import './App.css';
import { Route, Routes } from "react-router-dom";
import Best_Selling from './Component/Best-Selling/Best_Selling';
import Hero from './Component/Hero/Hero';
import Packages from './Component/Packages/Packages';
import Conact from './Component/Contact/Conact';
import Asian_Countries from './Component/Hero/Asian-Countries';
import Europe from './Component/Hero/Europe';
import Middle_East from './Component/Hero/Middle-East';
import Woderful_Netherland from './Component/Travel-Package/Woderful-Netherland';
import Fabulous_Belgium from './Component/Travel-Package/Fabulous-Belgium';
import Exotic_Prague from './Component/Travel-Package/Exotic-Prague';
import Astonishin_Turkey from './Component/Travel-Package/Astonishing-Turkey';
import Amazing_Santorni from './Component/Travel-Package/Amazing-Santorini';
import Rejuvenating_paris from './Component/Travel-Package/Rejuvenating-Paris';
import Amorous_Zurich from './Component/Travel-Package/Amorous-Zurich';
import Moscow_Tour from './Component/Travel-Package/Moscow-Tour';
import Charming_Paris from './Component/Travel-Package/Charming-Paris';
import Karismatic_Kerela from './Component/Travel-Package/karismatic-kerela';
import Best_of_orissa from './Component/Travel-Package/Best-of-orissa';
function App() {
  return (
    <div className="" style={{ fontFamily: '"League spartan",sans-serif' }}>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/best-selling' element={<Best_Selling />} />
        <Route path='/Packages' element={<Packages />} />
        <Route path='/Contact-us' element={<Conact />} />
        <Route path='/Asian-Countries' element={<Asian_Countries />} />
        <Route path='/Europe' element={<Europe />} />
        <Route path='/Middle-East' element={<Middle_East />} />
        <Route path='/best-selling/wonderful-netherlands/' element={<Woderful_Netherland />} />
        <Route path='/Fabulous-Belgium/' element={<Fabulous_Belgium />} />
        <Route path='/Exotic-Prague/' element={<Exotic_Prague />} />
        <Route path='/Astonishing-Turkey/' element={<Astonishin_Turkey />} />
        <Route path='/Amazing-Santorini/' element={<Amazing_Santorni />} />
        <Route path='/Travel-Packages/' element={<Rejuvenating_paris />} />
        <Route path='/Amorous-Zurich/' element={<Amorous_Zurich />} />
        <Route path='/Moscow-Tour/' element={<Moscow_Tour />} />
        <Route path='/Charming-Paris/' element={<Charming_Paris />} />
        <Route path='/Karismatic-Kerela/' element={<Karismatic_Kerela />} />
        <Route path='/Best-of-orissa/' element={<Best_of_orissa />} />
      </Routes>
    </div>
  );
}

export default App;
