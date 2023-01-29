import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from './screens/SplashScreen';
import UnitScreen from './screens/UnitScreen';
import AboutScreen from './screens/AboutScreen';

import { unitData } from './data';
import glyph_2_p1 from './glyphs/glyph_2_p1.svg';
import glyph_4_p1 from './glyphs/glyph_4_p1.svg';
import glyph_1_p4 from './glyphs/glyph_1_p4.svg';
import glyph_3_n1 from './glyphs/glyph_3_n1.svg';
import glyph_1_n7 from './glyphs/glyph_1_n7.svg';
import glyph_1_n6 from './glyphs/glyph_1_n6.svg';
import glyph_2_n2 from './glyphs/glyph_2_n2.svg';
import glyph_4_n5 from './glyphs/glyph_4_n5.svg';
import glyph_2_p4 from './glyphs/glyph_2_p4.svg';
import glyph_4_0 from './glyphs/glyph_4_0.svg';
import glyph_1_p3 from './glyphs/glyph_1_p3.svg';
import glyph_2_n1 from './glyphs/glyph_2_n1.svg';
import glyph_of_0 from './glyphs/glyph_of_0.svg';
import glyph_of_1 from './glyphs/glyph_of_1.svg';

function importAllAsArr(r) {
    const sortedKeys = r.keys().sort();
    const arr = sortedKeys.map((key) => r(key));
    return arr;
}

function App() {
  // set up
  const slidesData = {
    unit1: importAllAsArr(require.context('./slides/unit1/', true, /\.(png)$/)),
    unit2: importAllAsArr(require.context('./slides/unit2/', true, /\.(png)$/)),
    unit3: importAllAsArr(require.context('./slides/unit3/', true, /\.(png)$/)),
    unit4: importAllAsArr(require.context('./slides/unit4/', true, /\.(png)$/)),
    unit5: importAllAsArr(require.context('./slides/unit5/', true, /\.(png)$/)),
    unit6: importAllAsArr(require.context('./slides/unit6/', true, /\.(png)$/)),
    unit7: importAllAsArr(require.context('./slides/unit7/', true, /\.(png)$/)),
  }
  Object.entries(unitData).forEach(([key, value], idx) => {
      value.slides = slidesData[key];
      value.backgroundGlyphs = backgroundGlyphs[key];
  });
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/unit1" element={<UnitScreen unit={"unit1"} data={unitData["unit1"]}/>} />
        <Route path="/unit2" element={<UnitScreen unit={"unit2"} data={unitData["unit2"]}/>} />
        <Route path="/unit3" element={<UnitScreen unit={"unit3"} data={unitData["unit3"]}/>} />
        <Route path="/unit4" element={<UnitScreen unit={"unit4"} data={unitData["unit4"]}/>} />
        <Route path="/unit5" element={<UnitScreen unit={"unit5"} data={unitData["unit5"]}/>} />
        <Route path="/unit6" element={<UnitScreen unit={"unit6"} data={unitData["unit6"]}/>} />
        <Route path="/unit7" element={<UnitScreen unit={"unit7"} data={unitData["unit7"]}/>} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

const backgroundGlyphs = {
  unit1: [ // alphabets
      {className: "background-glyph", src: glyph_2_p1, style: {position:"absolute", height:"85vh", bottom: "2vh", transform:"translateX(-50%)", opacity: 0.3, zIndex: 0}},
      {className: "background-glyph", src: glyph_4_p1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(50%)", opacity: 0.3, zIndex: 0}},
  ],
  unit2: [ // abjads
      {className: "background-glyph", src: glyph_1_p4, style: {position:"absolute", height:"85vh", bottom: "2vh", transform:"translateX(-62%)", opacity: 0.4, zIndex: 0}},
      {className: "background-glyph", src: glyph_3_n1, style: {position:"absolute", height:"85vh", bottom: "2vh", right:0, transform:"translateX(25%)", opacity: 0.4, zIndex: 0}},
  ],
  unit3: [ // abugidas
      {className: "background-glyph", src: glyph_1_n7, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-55%)", opacity: 0.4, zIndex: 0}},
      {className: "background-glyph", src: glyph_1_n6, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(50%)", opacity: 0.4, zIndex: 0}},
  ],
  unit4: [ // syllabaries
      {className: "background-glyph", src: glyph_2_n2, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-50%)", opacity: 0.6, zIndex: 0}},
      {className: "background-glyph", src: glyph_4_n5, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(55%)", opacity: 0.6, zIndex: 0}},
  ],
  unit5: [ // alphasyllabaries
      {className: "background-glyph", src: glyph_2_p4, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-70%)", opacity: 0.35, zIndex: 0}},
      {className: "background-glyph", src: glyph_4_0, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(70%)", opacity: 0.35, zIndex: 0}},
  ],
  unit6: [ // logosyllabaries
      {className: "background-glyph", src: glyph_1_p3, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-60%)", opacity: 0.6, zIndex: 0}},
      {className: "background-glyph", src: glyph_2_n1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(60%)", opacity: 0.6, zIndex: 0}},
  ],
  unit7: [ // unicode
      {className: "background-glyph", src: glyph_of_0, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-60%)", opacity: 0.1, zIndex: 0}},
      {className: "background-glyph", src: glyph_of_1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(20%)", opacity: 0.1, zIndex: 0}},
  ],
}
