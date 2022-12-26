import React from "react";
import { glyphDescription } from "../data";
import { getBaseFileName, getGlyphId } from "../util";

// importing glyph svgs/pngs
const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[getBaseFileName(key)] = r(key)));
}
console.log(cache);
importAll(require.context('../glyphs/', true, /\.(png|svg)$/));
// for looping
const row_nums = Array.from([0,1,2,3,4]);
const left_cols = Array.from(['n8', 'n7', 'n6', 'n5', 'n4', 'n3', 'n2', 'n1']);
const right_cols = Array.from(['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8']);

// helpers
const vh = (num) => `${num}vh`;
const vw = (num) => `${num}vw`;
const GlyphDiv = ({id, src, styles, imgStyles}) => {
    return (
    <div id={id} style={{
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
        <div>
            {row_nums.map((row) => (
                <div key={`row_${row}`} style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%", height:vh(rowHeights[row])}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"end", width:"40%"}}>
                        {left_cols.map((col) => {
                            const glyphId = getGlyphId(row, col);
                            if (cache[glyphId] === undefined) return null;
                            return (
                                <GlyphDiv key={glyphId} id={glyphId} src={cache[glyphId]} {...glyphStyles[glyphId]} />
                            );
                        })}
                    </div>
                    <GlyphDiv id={getGlyphId(row,0)} src={cache[getGlyphId(row,0)]} {...glyphStyles[getGlyphId(row,0)]} />
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"start", width:"40%"}}>
                        {right_cols.map((col) => {
                            const glyphId = getGlyphId(row, col);
                            if (cache[glyphId] === undefined) return null;
                            return (
                                <GlyphDiv key={glyphId} id={glyphId} src={cache[glyphId]} {...glyphStyles[glyphId]} />
                            );
                        })}
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default SplashScreen;

// fonts
// european aplphabets, georgian - helvetica
// chinese - helvetica
// jp - noto sans jp
// thai - helvetica
// indic - noto sans
// geez, khmer - noto serif 
// armenian - noto sans 

//// styles
const capHeight = 13; // greek, cyrillic, latin, etc
const hanziDy = 2;
const indicDy = -1;
const nonIndicAbugDy = -2;
const arabDy = -4;
const rowHeight = 16.8;

const rowHeights = [rowHeight, rowHeight-1, rowHeight, rowHeight, rowHeight, rowHeight, rowHeight];

const glyphStyles = {
    glyph_0_n7: {
        imgStyles: {height:vh(capHeight-4), marginRight:vw(-0.3)}
    },
    glyph_0_n6: {
        imgStyles: {height:vh(capHeight+indicDy)}
    },
    glyph_0_n5: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy), marginLeft:vw(0.3), marginRight:vw(0.5)}
    },
    glyph_0_n4: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_0_n3: {
        imgStyles: {height:vh(capHeight+3.5), marginBottom:vh(-1), marginLeft:vw(-0.2), marginRight:vw(-0.3)}
    },
    glyph_0_n2: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_0_n1: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_0_0: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy)}
    },
    glyph_0_p1: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(0.2)}
    },
    glyph_0_p2: {
        imgStyles: {height:vh(capHeight+2)}
    },
    glyph_0_p3: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(-1)}
    },
    glyph_0_p4: {
        imgStyles: {height:vh(capHeight+arabDy)}
    },
    glyph_0_p5: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_0_p6: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy)}
    },
    glyph_0_p7: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_n7: {
        imgStyles: {height:vh(capHeight+indicDy), marginRight:0}
    },
    glyph_1_n6: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy)}
    },
    glyph_1_n5: {
        imgStyles: {height:vh(capHeight), marginRight:-7}
    },
    glyph_1_n4: {
        imgStyles: {height:vh(capHeight+indicDy)}
    },
    glyph_1_n3: {
        imgStyles: {height:vh(capHeight-4)}
    },
    glyph_1_n2: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_n1: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_0: {
        imgStyles: { height: vh(capHeight) }
    },
    glyph_1_p1: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_p2: {
        imgStyles: {height:vh(capHeight+indicDy+5)} /*has a stroke on top*/ 
    },
    glyph_1_p3: {
        imgStyles: {height:vh(capHeight+hanziDy),  marginBottom:vh(-1)}
    },
    glyph_1_p4: {
        imgStyles: {height:vh(capHeight-1)}
    },
    glyph_1_p5: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_p6: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_1_p7: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_n7: {
        imgStyles: {height:vh(capHeight+hanziDy)}
    },
    glyph_2_n6: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_n5: {
        imgStyles: {height:vh(capHeight), marginRight:8, marginLeft:8}
    },
    glyph_2_n4: {
        imgStyles: {height:vh(capHeight+3), marginBottom:vh(-4)}
    },
    glyph_2_n3: {
        imgStyles: {height:vh(capHeight+2)}
    },
    glyph_2_n2: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_n1: {
        imgStyles: {height:vh(capHeight+hanziDy), marginRight:-5}
    },
    glyph_2_0: {
        imgStyles: {height:vh(capHeight+3.5), marginBottom:vh(-1)}
    },
    glyph_2_p1: {
        imgStyles: {height:vh(capHeight+4.5), marginLeft:-10}
    },
    glyph_2_p2: {
        imgStyles: {height:vh(capHeight+4), marginBottom:vh(-4), marginLeft:-15}
    },
    glyph_2_p3: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_p4: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_p5: {
        imgStyles: {height:vh(capHeight-1)}
    },
    glyph_2_p6: {
        imgStyles: {height:vh(capHeight-1)}
    },
    glyph_2_p7: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_2_p8: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy)}
    },
    glyph_3_n7: {
        imgStyles: {height:vh(capHeight+2), marginBottom:vh(-2)}
    },
    glyph_3_n6: {
        imgStyles: {height:vh(capHeight+3), marginBottom:vh(-1.7)}
    },
    glyph_3_n5: {
        imgStyles: {height:vh(capHeight+3), marginBottom:vh(-2.5)}
    },
    glyph_3_n4: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy+2.5), marginBottom:vh(-2.5)}
    },
    glyph_3_n3: {
        imgStyles: {height:vh(capHeight), marginRight:vw(0.5), marginLeft:vw(0.5)}
    },
    glyph_3_n2: {
        imgStyles: {height:vh(capHeight+1.5), marginBottom:vh(-1.5), marginRight:vw(0.3)}
    },
    glyph_3_n1: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_3_0: {
        imgStyles: {height:vh(capHeight+2), marginBottom:vh(-2)}
    },
    glyph_3_p1: {
        imgStyles: {height:vh(capHeight+nonIndicAbugDy)}
    },
    glyph_3_p2: {
        imgStyles: {height:vh(capHeight-1)}
    },
    glyph_3_p3: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(0.5)}
    },
    glyph_3_p4: {
        imgStyles: {height:vh(capHeight+1)}
    },
    glyph_3_p5: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_3_p6: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(1)}
    },
    glyph_3_p7: {
        imgStyles: {height:vh(capHeight+2.7), marginBottom:vh(0), marginLeft:vw(-1)}
    },
    glyph_4_n7: {
        imgStyles: {height:vh(capHeight+2), marginBottom:vh(-2)}
    },
    glyph_4_n6: {
        imgStyles: {height:vh(capHeight), marginRight:vw(0.5)}
    },
    glyph_4_n5: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_4_n4: {
        imgStyles: {height:vh(capHeight+1), marginBottom:vh(-1)}
    },
    glyph_4_n3: {
        imgStyles: {height:vh(capHeight), marginRight:vh(0.3)}
    },
    glyph_4_n2: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_4_n1: {
        imgStyles: {height:vh(capHeight), marginRight:vw(-1)}
    },
    glyph_4_0: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(1)}
    },
    glyph_4_p1: {
        imgStyles: {height:vh(capHeight+3)}
    },
    glyph_4_p2: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(0.3),  marginRight:vw(0.3)}
    },
    glyph_4_p3: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_4_p4: {
        imgStyles: {height:vh(capHeight-2)}
    },
    glyph_4_p5: {
        imgStyles: {height:vh(capHeight)}
    },
    glyph_4_p6: {
        imgStyles: {height:vh(capHeight), marginBottom:vh(-3)}
    },
    glyph_4_p7: {
        imgStyles: {height:vh(capHeight), marginLeft:vw(-1)}
    },
    glyph_5_n7: {
        imgStyles: {}
    },
    glyph_5_n6: {
        imgStyles: {}
    },
    glyph_5_n5: {
        imgStyles: {}
    },
    glyph_5_n4: {
        imgStyles: {}
    },
    glyph_5_n3: {
        imgStyles: {}
    },
    glyph_5_n2: {
        imgStyles: {}
    },
    glyph_5_n1: {
        imgStyles: {}
    },
    glyph_5_0: {
        imgStyles: {}
    },
    glyph_5_p1: {
        imgStyles: {}
    },
    glyph_5_p2: {
        imgStyles: {}
    },
    glyph_5_p3: {
        imgStyles: {}
    },
    glyph_5_p4: {
        imgStyles: {}
    },
    glyph_5_p5: {
        imgStyles: {}
    },
    glyph_5_p6: {
        imgStyles: {}
    },
    glyph_5_p7: {
        imgStyles: {}
    },
    glyph_6_n7: {
        imgStyles: {}
    },
    glyph_6_n6: {
        imgStyles: {}
    },
    glyph_6_n5: {
        imgStyles: {}
    },
    glyph_6_n4: {
        imgStyles: {}
    },
    glyph_6_n3: {
        imgStyles: {}
    },
    glyph_6_n2: {
        imgStyles: {}
    },
    glyph_6_n1: {
        imgStyles: {}
    },
    glyph_6_0: {
        imgStyles: {}
    },
    glyph_6_p1: {
        imgStyles: {}
    },
    glyph_6_p2: {
        imgStyles: {}
    },
    glyph_6_p3: {
        imgStyles: {}
    },
    glyph_6_p4: {
        imgStyles: {}
    },
    glyph_6_p5: {
        imgStyles: {}
    },
    glyph_6_p6: {
        imgStyles: {}
    },
    glyph_6_p7: {
        imgStyles: {}
    }
}
// const row2 = () => {
//     return (
//         <div style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%"}}>
//             <div style={{display:"flex", flexDirection:"row", justifyContent:"end", width:"40%"}}>
//                 <GlyphDiv src={glyph_2_n7} imgStyles={{height:vh(capHeight+hanziDy)}}/>
//                 <GlyphDiv src={glyph_2_n6} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_2_n5} imgStyles={{height:vh(capHeight), marginRight:8, marginLeft:8}}/>
//                 <GlyphDiv src={glyph_2_n4} imgStyles={{height:vh(capHeight+5), marginBottom:vh(-5)}}/>
//                 <GlyphDiv src={glyph_2_n3} imgStyles={{height:vh(capHeight+2)}}/>
//                 <GlyphDiv src={glyph_2_n2} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_2_n1} imgStyles={{height:vh(capHeight+hanziDy), marginRight:-5}}/>
//             </div>
//             <GlyphDiv src={glyph_2_0} imgStyles={{height:vh(capHeight+3.5), marginBottom:vh(-1)}}/> 
//             <div style={{display:"flex", flexDirection:"row", justifyContent:"start", width:"40%"}}>
//                 <GlyphDiv src={glyph_2_p1} imgStyles={{height:vh(capHeight+4.5), marginLeft:-10}}/>
//                 <GlyphDiv src={glyph_2_p2} imgStyles={{height:vh(capHeight+4), marginBottom:vh(-4), marginLeft:-15}} />
//                 <GlyphDiv src={glyph_2_p3} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_2_p4} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_2_p5} imgStyles={{height:vh(capHeight-1)}}/>
//                 <GlyphDiv src={glyph_2_p6} imgStyles={{height:vh(capHeight-1)}}/>
//                 <GlyphDiv src={glyph_2_p7} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_2_p8} imgStyles={{height:vh(capHeight+nonIndicAbugDy)}}/>
//             </div>
//         </div>
//     );
// }

// const row1 = () => {
//     return (
//         <div style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%"}}>
//             <div style={{display:"flex", flexDirection:"row", justifyContent:"end", width:"40%"}}>
//                 <GlyphDiv {...splashDatum} />
//                 {/* <GlyphDiv src={require('../glyphs/glyph_1_n7.svg').default} imgStyles={{height:vh(capHeight+indicDy), marginRight:0}}/> */}
//                 <GlyphDiv src={glyph_1_n6} imgStyles={{height:vh(capHeight+nonIndicAbugDy)}}/>
//                 <GlyphDiv src={glyph_1_n5} imgStyles={{height:vh(capHeight), marginRight:-7}}/>
//                 <GlyphDiv src={glyph_1_n4} imgStyles={{height:vh(capHeight+indicDy)}}/>
//                 <GlyphDiv src={glyph_1_n3} imgStyles={{height:vh(capHeight-4)}}/>
//                 <GlyphDiv src={glyph_1_n2} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_1_n1} imgStyles={{height:vh(capHeight)}}/>
//             </div>
//             <GlyphDiv src={glyph_1_0}  imgStyles={{height:vh(capHeight)}}/> 
//             <div style={{display:"flex", flexDirection:"row", justifyContent:"start", width:"40%"}}>
//                 <GlyphDiv src={glyph_1_p1} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_1_p2} imgStyles={{height:vh(capHeight+indicDy+5)}}/> {/*has a stroke on top*/ }
//                 <GlyphDiv src={glyph_1_p3} imgStyles={{height:vh(capHeight+hanziDy), marginBottom:vh(-1)}}/>
//                 <GlyphDiv src={glyph_1_p4} imgStyles={{height:vh(capHeight-1)}}/>
//                 <GlyphDiv src={glyph_1_p5} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_1_p6} imgStyles={{height:vh(capHeight)}}/>
//                 <GlyphDiv src={glyph_1_p7} imgStyles={{height:vh(capHeight)}}/>
//             </div>
//         </div>
//     );
// };
