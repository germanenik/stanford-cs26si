export const getBaseFileName = (pathString) => {
    return pathString.substring(pathString.lastIndexOf('/')+1, pathString.lastIndexOf('.'));
}

export const getPositionFromFileName = (baseFileName) => {
    /* format is glyph_{rownum}_{colnum} */
}

export const getGlyphId = (row, col) => `glyph_${row}_${col}`;

export const scaleVh = (str, scaleFactor) => {
    /*  format is #.##vh */
    if (!str) return null;
    let str_ = str.slice(0, -2);  // cut off vh
    let num = Number(str_);
    if (isNaN(num)) {
        console.log("is NaN")
        return null;
    }
    num *= scaleFactor;
    return num.toFixed(2)+'vh';
}

export const styleCodepoint = (num) => {
    let prefix = "U+";
    let codepoint = num.toString(16).toUpperCase();
    const prependedZeros = 4 - codepoint.length;
    if (prependedZeros > 0) {
        for (let i = 0; i < prependedZeros; i++) {
            prefix += "0";
        }
    }
    return prefix + codepoint;
}