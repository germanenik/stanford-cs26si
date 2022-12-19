import React from "react";
import "./Splash.css"
import glyph_2_0 from '../glyphs/glyph_2_0.png';
import glyph_2_p1 from '../glyphs/glyph_2_p1.svg';
import glyph_2_p2 from '../glyphs/glyph_2_p2.svg';
import glyph_2_p3 from '../glyphs/glyph_2_p3.svg';
import glyph_2_p4 from '../glyphs/glyph_2_p4.svg';
import glyph_2_p5 from '../glyphs/glyph_2_p5.svg';
import glyph_2_p6 from '../glyphs/glyph_2_p6.svg';
import glyph_2_p7 from '../glyphs/glyph_2_p7.svg';
import glyph_2_p8 from '../glyphs/glyph_2_p8.svg';


const GlyphDiv = ({src, shiftDown=false}) => {
    console.log(src);
    return (
    <div className="glyph" style={{padding:5, paddingBottom:shiftDown ? -10 : 5}}>
        <img src={src} alt="glyph" style={{opacity:0.5}} />
    </div>
    )
};

const SplashScreen = () => {
    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"flex-end"}}>
            <GlyphDiv src={glyph_2_0} />
            <GlyphDiv src={glyph_2_p1} />
            <GlyphDiv src={glyph_2_p2} />
            <GlyphDiv src={glyph_2_p3} shiftDown={true}/>
            <GlyphDiv src={glyph_2_p4} />
            <GlyphDiv src={glyph_2_p5} />
            <GlyphDiv src={glyph_2_p6} />
            <GlyphDiv src={glyph_2_p7} />
            <GlyphDiv src={glyph_2_p8} />
        </div>
    );
}

export default SplashScreen;

// for bulk: https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i