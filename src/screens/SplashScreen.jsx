import React from "react";

import glyph_2_n7 from '../glyphs/glyph_2_n7.svg';
import glyph_2_n6 from '../glyphs/glyph_2_n6.svg';
import glyph_2_n5 from '../glyphs/glyph_2_n5.svg';
import glyph_2_n4 from '../glyphs/glyph_2_n4.svg';
import glyph_2_n3 from '../glyphs/glyph_2_n3.svg';
import glyph_2_n2 from '../glyphs/glyph_2_n2.svg';
import glyph_2_n1 from '../glyphs/glyph_2_n1.svg';
import glyph_2_0 from '../glyphs/glyph_2_0.png';
import glyph_2_p1 from '../glyphs/glyph_2_p1.svg';
import glyph_2_p2 from '../glyphs/glyph_2_p2.svg';
import glyph_2_p3 from '../glyphs/glyph_2_p3.svg';
import glyph_2_p4 from '../glyphs/glyph_2_p4.svg';
import glyph_2_p5 from '../glyphs/glyph_2_p5.svg';
import glyph_2_p6 from '../glyphs/glyph_2_p6.svg';
import glyph_2_p7 from '../glyphs/glyph_2_p7.svg';
import glyph_2_p8 from '../glyphs/glyph_2_p8.svg';

// consts
const capHeight = 13; // greek, cyrillic, latin, etc
const hanziDy = 2;

// helpers
const vh = (num) => `${num}vh`;
const GlyphDiv = ({src, styles, imgStyles}) => {
    return (
    <div style={{
        display:"flex", 
        flexDirection:"row",
        alignItems:"flex-end",
        marginTop:vh(-1),
        marginLeft:6, 
        marginRight:6, 
        opacity:0.5, 
        ...styles
    }}>
        <img src={src} alt="glyph" style={{...imgStyles}}/>
    </div>
    )
};

const SplashScreen = () => {
    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"end", width:"40%"}}>
                <GlyphDiv src={glyph_2_n7} imgStyles={{height:vh(capHeight+hanziDy)}}/>
                <GlyphDiv src={glyph_2_n6} imgStyles={{height:vh(capHeight)}}/>
                <GlyphDiv src={glyph_2_n5} imgStyles={{height:vh(capHeight), marginRight:8, marginLeft:8}}/>
                <GlyphDiv src={glyph_2_n4} imgStyles={{height:vh(capHeight+5), marginBottom:vh(-5)}}/>
                <GlyphDiv src={glyph_2_n3} imgStyles={{height:vh(capHeight+hanziDy)}}/>
                <GlyphDiv src={glyph_2_n2} imgStyles={{height:vh(capHeight)}}/>
                <GlyphDiv src={glyph_2_n1} imgStyles={{height:vh(capHeight+hanziDy), marginRight:-5}}/>
            </div>
            <GlyphDiv src={glyph_2_0}  imgStyles={{height:vh(capHeight+2.5)}}/> 
            <div style={{display:"flex", flexDirection:"row", justifyContent:"start", width:"40%"}}>
                <GlyphDiv src={glyph_2_p1} imgStyles={{height:vh(capHeight+4.5), marginLeft:-10}}/>
                <GlyphDiv src={glyph_2_p2} imgStyles={{height:vh(capHeight+4), marginBottom:vh(-4), marginLeft:-15}} />
                <GlyphDiv src={glyph_2_p3} imgStyles={{height:vh(capHeight)}}/>
                <GlyphDiv src={glyph_2_p4} imgStyles={{height:vh(capHeight)}}/>
                <GlyphDiv src={glyph_2_p5} imgStyles={{height:vh(capHeight-1)}}/>
                <GlyphDiv src={glyph_2_p6} imgStyles={{height:vh(capHeight-1)}}/>
                <GlyphDiv src={glyph_2_p7} imgStyles={{height:vh(capHeight)}}/>
                <GlyphDiv src={glyph_2_p8} imgStyles={{height:vh(capHeight-1)}}/>
            </div>
        </div>
    );
}

export default SplashScreen;

// for bulk: https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i