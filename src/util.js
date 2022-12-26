export const getBaseFileName = (pathString) => {
    return pathString.substring(pathString.lastIndexOf('/')+1, pathString.lastIndexOf('.'));
}

export const getPositionFromFileName = (baseFileName) => {
    /* format is glyph_{rownum}_{colnum} */
}

export const getGlyphId = (row, col) => `glyph_${row}_${col}`;