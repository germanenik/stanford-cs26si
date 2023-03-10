export const unitData = {
    unit1: {
        num: 1,
        name: "Alphabets",
        body: [
            "Alphabets are a writing system where a consonant and a vowel are each usually represented by a character; both are of equal importance/status.",
            "We learned about applications of diacritics, why people change writing scripts, where most alphabets are encoded in Unicode, and how alphabets are typed." ,
            "Main case studies: Latin via Old English, Vietnamese, Polish; Cyrillic via Russian, Bulgarian; Greek, Georgian, Armenian, Adlam, N'ko."
        ],
        slidesNums: [6, 24, 27, 65, 77, 82, 102, 129, 130],
        slidesTotal: 130
    },
    unit2: {
        num: 2,
        name: "Abjads",
        body: [
            "Abjads are writing system with main characters representing consonants, and vowels either omitted or optionally represented via diacritics. Most modern abjads are impure.",
            "We learned about R2L directionality and how it affects the UI, root and vowel patterns of Semitic languages (and why abjads work for them specifically), Arabic IMFI glyph forms, Unicode vs. Complex Text Rendering Engines, and how abjads are typed.", 
            "Main case studies: Old Tifinagh, Hebrew, Arabic (+ Arabizi)."
        ],
        slidesNums: [9, 17, 29, 32, 39, 43, 57, 63],
        slidesTotal: 64
        
    },
    unit3: {
        num: 3,
        name: "Abugidas",
        body: [
            "Most characters in the abugida writing system are consonant-vowel units, where consonants are primary and vowels are secondary (often diacritics). The composition process is usually systematic.",
            "We learned about historic conversions of abjads to abugidas, dependent vs. independent vowels, different diacritic placement in Brahmic abugidas, consonant conjuncts, and how abugidas are typed.",
            "Main case studies: Ge'ez via Amharic; Devanagari via Hindi; Tamil, Thai, Canadian Aboriginal Syllabics."
        ],
        slidesNums: [5, 9, 20, 26, 28, 32, 37, 46, 66],
        slidesTotal: 68
    },
    unit4: {
        num: 4,
        name: "Syllabaries",
        body: [
            "In syllabaries, characters are consonant-vowel units, but consonant and vowel parts are inseparable, unlike abugidas.",
            "We learned the history of Japanese writing, origins and purposes the three Japanse scripts, and how syllabaries are typed.", 
            "Main case studies: Hiragana and Katakana via Japanese; Cherokee, Afaka."
        ],
        slidesNums: [7, 13, 17, 31, 32, 35, 46],
        slidesTotal: 50
    },
    unit5: {
        num: 5,
        name: "Alphasyllabaries",
        body: [
            "Alphasyllabaries (which some call syllabic alphabets) are a writing system that makes up syllabic units from phonetic alphabet-like characters.",
            "We learned the history of Korean writing, Jamo vs. Hangeul, composition rules of Hangeul characters, how Hangeul gets composed in computers, and how it is typed.", 
            "Case study: Hangeul via Korean."
        ],
        slidesNums: [6, 8, 14, 18, 21, 30, 36, 37],
        slidesTotal: 40
    },
    unit6: {
        num: 6,
        name: "Logosyllabaries",
        body: [
            "Most characters of the logosyllabary writing system consist of a sound part and a meaning part.",
            "We learned about the Xu Shen classification of Chinese characters, depths of the simplified vs. traditional debate, character simplification strategies, Han characters in Unicode (the UniHan initiative), and many different ways to input Chinese (pinyin, bopomofo, handwriting, wubihua, cangjie, wubi).",
            "Case study: Hanzi (simplified, traditional) via varieties of Chinese."
        ],
        slidesNums: [5, 23, 30, 37, 38, 49, 51, 63],
        slidesTotal: 66
    },
    unit7: {
        num: 7,
        name: "Unicode",
        body: [
            "Unicode is not a writing system but an encoding standard.",
            "Although Unicode has been integrated into all units about writing systems, we still had a separate unit on technicalities of Unicode. We learned about numeral systems, pre-Unicode encoding standards (e.g. ASCII), pros and cons of UTF-8, UTF-16, UTF-32 encoding schemes, and some history of text input."        
        ],
        slidesNums: [4, 10, 16, 20, 22, 24],
        slidesTotal: 58
    }
}

const WritingSystem = {
    Abugida: "Abugida",
    Alphabet: "Alphabet",
    Abjad: "Abjad",
    Syllabary: "Syllabary",
    Alphasyllabary: "Alphasyllabary",
    Logosyllabary: "Logosyllabary",
    Semisyllabary: "Semisyllabary",
    Pictography: "Pictography",
}

export const glyphInfo = {
    glyph_0_n7: { // ???
        codePoint: [0xC12],
        writingSystem: WritingSystem.Abugida,
        script: 'Telugu',
        language: 'Telugu',
    },
    glyph_0_n6: { // ???
        codePoint: [0x936],
        writingSystem: WritingSystem.Abugida,
        script: 'Devanagari',
        language: 'Nepali',
    },
    glyph_0_n5: { // ???
        codePoint: [0xa29b],
        writingSystem: WritingSystem.Syllabary,
        script: 'Yi',
        language: 'Mantsi',
    },
    glyph_0_n4: { // R
        codePoint: [0x52],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'Spanish',
    },
    glyph_0_n3: { // ????
        codePoint: [0x1f60a],
        writingSystem: WritingSystem.Pictography,
        script: "Emoji",
        language: null,
    },
    glyph_0_n2: { // ??
        codePoint: [0x42f],
        writingSystem: WritingSystem.Alphabet,
        script: "Cyrillic",
        language: 'Bulgarian',
    },
    glyph_0_n1: { // ???
        codePoint: [0x80c],
        writingSystem: WritingSystem.Abjad,
        script: "Samaritan",
        language: 'Samaritan Hebrew',
    },
    glyph_0_0: { // ???
        codePoint: [0xe12],
        writingSystem: WritingSystem.Abugida,
        script: 'Thai',
        language: 'Thai',
    },
    glyph_0_p1: { // ???
        codePoint: [0x842],
        writingSystem: WritingSystem.Alphabet,
        script: 'Mandaic',
        language: 'Mandaic',
    },
    glyph_0_p2: { // ???
        codePoint: [0x30ad],
        writingSystem: WritingSystem.Syllabary,
        script: 'Katakana',
        language: 'Japanese',
    },
    glyph_0_p3: { // ??
        codePoint: [0x41b],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Kyrgyz',
    },
    glyph_0_p4: { // ???
        codePoint: [0x10e0],
        writingSystem: WritingSystem.Alphabet,
        script: 'Georgian',
        language: 'Georgian',
    },
    glyph_0_p5: { // ??
        codePoint: [0x79d],
        writingSystem: WritingSystem.Abugida,
        script: 'Thaana',
        language: 'Maldivian',
    },
    glyph_0_p6: { // ???
        codePoint: [0xb85],
        writingSystem: WritingSystem.Abugida,
        script: 'Tamil',
        language: 'Tamil',
    },
    glyph_0_p7: { // H
        codePoint: [0x48],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'Tok Pisin',
    },
    glyph_1_n7: { // ???
        codePoint: [0x919],
        writingSystem: WritingSystem.Abugida,
        script: 'Devanagari',
        language: 'Newar',
    },
    glyph_1_n6: { // ???
        codePoint: [0xe16],
        writingSystem: WritingSystem.Abugida,
        script: 'Thai',
        language: 'Tai Yo',
    },
    glyph_1_n5: { // ???
        codePoint: [0x12d1],
        writingSystem: WritingSystem.Abugida,
        script: "Ge'ez",
        language: 'Amharic',
    },
    glyph_1_n4: { // ???
        codePoint: [0x915],
        writingSystem: WritingSystem.Abugida,
        script: 'Devanagari',
        language: 'Hindi',
    },
    glyph_1_n3: { // ???
        codePoint: [0x101f],
        writingSystem: WritingSystem.Abjad,
        script: 'Burmese',
        language: 'Burmese',
    },
    glyph_1_n2: { // ???
        codePoint: [0xa6b8],
        writingSystem: WritingSystem.Syllabary,
        script: 'Bamum',
        language: 'Bamum',
    },
    glyph_1_n1: { // ???
        codePoint: [0x140a],
        writingSystem: WritingSystem.Abugida,
        script: 'Qaniujaaqpait',
        language: 'Inuktitut',
    },
    glyph_1_0: { // ???
        codePoint: [0x1403],
        writingSystem: WritingSystem.Abugida,
        script: 'Qaniujaaqpait',
        language: 'Inuktitut',
    },
    glyph_1_p1: { // ???
        codePoint: [0x1405],
        writingSystem: WritingSystem.Abugida,
        script: 'Qaniujaaqpait',
        language: 'Inuktitut',
    },
    glyph_1_p2: { // ???
        codePoint: [0x989],
        writingSystem: WritingSystem.Abugida,
        script: 'Bengali-Assamese',
        language: 'Bangla',
    },
    glyph_1_p3: { // ???
        codePoint: [0x5340],
        writingSystem: WritingSystem.Logosyllabary,
        script: 'Han',
        language: 'Cantonese',
    },
    glyph_1_p4: { // ??
        codePoint: [0x727],
        writingSystem: WritingSystem.Abjad,
        script: 'Syriac',
        language: 'Syriac',
    },
    glyph_1_p5: { // ????
        codePoint: [0x41e, 0x304],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Mansi',
    },
    glyph_1_p6: { // ????
        codePoint: [0x1e2e2],
        writingSystem: WritingSystem.Alphabet,
        script: 'Wancho',
        language: 'Wancho',
    },
    glyph_1_p7: { // ???
        codePoint: [0x3072],
        writingSystem: WritingSystem.Syllabary,
        script: 'Hiragana',
        language: 'Japanese',
    },
    glyph_2_n7: { // ???
        codePoint: [0x2ee9],
        writingSystem: WritingSystem.Logosyllabary,
        script: 'Han',
        language: 'Japanese',
    },
    glyph_2_n6: { // ??
        codePoint: [0x3a8],
        writingSystem: WritingSystem.Alphabet,
        script: 'Greek',
        language: 'Greek',
    },
    glyph_2_n5: { // ????
        codePoint: [0x16a4f],
        writingSystem: WritingSystem.Alphabet,
        script: 'Mru',
        language: 'Mru',
    },
    glyph_2_n4: { // ????
        codePoint: [0x104be],
        writingSystem: WritingSystem.Alphabet,
        script: 'Osage',
        language: 'Osage',
    },
    glyph_2_n3: { // ???
        codePoint: [0x3080],
        writingSystem: WritingSystem.Syllabary,
        script: 'Hiragana',
        language: 'Japanese',
    },
    glyph_2_n2: { // ???
        codePoint: [0xa083],
        writingSystem: WritingSystem.Syllabary,
        script: 'Yi',
        language: 'Nuosu',
    },
    glyph_2_n1: { // ???
        codePoint: [0x8bed],
        writingSystem: WritingSystem.Logosyllabary,
        script: 'Han',
        language: 'Mandarin',
    },
    glyph_2_0: { // ????
        codePoint: [0x1f929],
        writingSystem: WritingSystem.Pictography,
        script: 'Emoji',
        language: null,
    },
    glyph_2_p1: { // ??
        codePoint: [0xc5],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'Swedish',
    },
    glyph_2_p2: { // ??
        codePoint: [0x4b4],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Abkhaz',
    },
    glyph_2_p3: { // ????
        codePoint: [0x11402],
        writingSystem: WritingSystem.Abugida,
        script: 'Newa',
        language: 'Newar',
    },
    glyph_2_p4: { // ???
        codePoint: [0xac85],
        writingSystem: WritingSystem.Alphasyllabary,
        script: 'Hangeul',
        language: 'Korean',
    },
    glyph_2_p5: { // ????
        codePoint: [0x1048c],
        writingSystem: WritingSystem.Alphabet,
        script: 'Osmanya',
        language: 'Somali',
    },
    glyph_2_p6: { // ???
        codePoint: [0xb1e],
        writingSystem: WritingSystem.Abugida,
        script: 'Odia',
        language: 'Odia',
    },
    glyph_2_p7: { // ???
        codePoint: [0xa0b9],
        writingSystem: WritingSystem.Syllabary,
        script: 'Yi',
        language: 'Nuosu',
    },
    glyph_2_p8: { // ???
        codePoint: [0xeb2],
        writingSystem: WritingSystem.Abugida,
        script: 'Lao',
        language: 'Lao',
    },
    glyph_3_n7: { // ???
        codePoint: [0xa09],
        writingSystem: WritingSystem.Abugida,
        script: 'Gurmukhi',
        language: 'Punjabi',
    },
    glyph_3_n6: { // ???
        codePoint: [0xb87],
        writingSystem: WritingSystem.Abugida,
        script: 'Tamil',
        language: 'Tamil',
    },
    glyph_3_n5: { // ??
        codePoint: [0x7f7],
        writingSystem: WritingSystem.Alphabet,
        script: "N'ko",
        language: "N'ko",
    },
    glyph_3_n4: { // ???
        codePoint: [0xd0b],
        writingSystem: WritingSystem.Abugida,
        script: 'Malayalam',
        language: 'Malayalam',
    },
    glyph_3_n3: { // ????
        codePoint: [0x16f12],
        writingSystem: WritingSystem.Abugida,
        script: 'Miao',
        language: 'A-Hmao',
    },
    glyph_3_n2: { // ???
        codePoint: [0x3116],
        writingSystem: WritingSystem.Semisyllabary,
        script: 'Bopomofo',
        language: 'Mandarin',
    },
    glyph_3_n1: { // ??
        codePoint: [0x642],
        writingSystem: WritingSystem.Abjad,
        script: 'Arabic',
        language: 'Arabic',
    },
    glyph_3_0: { // ??
        codePoint: [0x4a8],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Abkhaz',
    },
    glyph_3_p1: { // ???
        codePoint: [0x1788],
        writingSystem: WritingSystem.Abugida,
        script: 'Khmer',
        language: 'Khmer',
    },
    glyph_3_p2: { // ??
        codePoint: [0x5d0],
        writingSystem: WritingSystem.Abjad,
        script: 'Hebrew',
        language: 'Hebrew',
    },
    glyph_3_p3: { // ????
        codePoint: [0x1e926],
        writingSystem: WritingSystem.Alphabet,
        script: 'Adlam',
        language: 'Fulani',
    },
    glyph_3_p4: { // ???
        codePoint: [0x30db],
        writingSystem: WritingSystem.Syllabary,
        script: 'Katakana',
        language: 'Ainu',
    },
    glyph_3_p5: { // ???
        codePoint: [0xa4e4],
        writingSystem: WritingSystem.Alphabet,
        script: 'Fraser',
        language: 'Lisu',
    },
    glyph_3_p6: { // ???
        codePoint: [0x1bba],
        writingSystem: WritingSystem.Abugida,
        script: 'Sundanese',
        language: 'Sundanese',
    },
    glyph_3_p7: { // ????
        codePoint: [0x1f525],
        writingSystem: WritingSystem.Pictography,
        script: 'Emoji',
        language: null,
    },
    glyph_4_n7: { // ??
        codePoint: [0x40f],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Serbian',
    },
    glyph_4_n6: { // ???
        codePoint: [0x13ba],
        writingSystem: WritingSystem.Syllabary,
        script: "Cherokee",
        language: "Cherokee",
    },
    glyph_4_n5: { // ???
        codePoint: [0x30c4],
        writingSystem: WritingSystem.Syllabary,
        script: "Katakana",
        language: 'Japanese',
    },
    glyph_4_n4: { // ???
        codePoint: [0x1872],
        writingSystem: 'Alphabet',
        script: 'Mongolian',
        language: 'Mongolian',
    },
    glyph_4_n3: { // ??
        codePoint: [0x39e],
        writingSystem: WritingSystem.Alphabet,
        script: 'Greek',
        language: 'Greek',
    },
    glyph_4_n2: { // ??
        codePoint: [0x46c],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Old Church Slavonic',
    },
    glyph_4_n1: { // ????
        codePoint: [0x1e80a],
        writingSystem: WritingSystem.Syllabary,
        script: 'Mende Kikakui',
        language: 'Mende',
    },
    glyph_4_0: { // ???
        codePoint: [0xd55c],
        writingSystem: WritingSystem.Alphasyllabary,
        script: 'Hangeul',
        language: 'Korean',
    },
    glyph_4_p1: { // ??
        codePoint: [0x419],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Russian',
    },
    glyph_4_p2: { // ??
        codePoint: [0x531],
        writingSystem: WritingSystem.Alphabet,
        script: 'Armenian',
        language: 'Armenian',
    },
    glyph_4_p3: { // N
        codePoint: [0x4e],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'English',
    },
    glyph_4_p4: { // ???
        codePoint: [0x1328],
        writingSystem: WritingSystem.Abugida,
        script: "Ge'ez",
        language: 'Harari',
    },
    glyph_4_p5: { // ???
        codePoint: [0x933],
        writingSystem: WritingSystem.Abugida,
        script: 'Devanagari',
        language: 'Marathi',
    },
    glyph_4_p6: { // ???
        codePoint: [0xf6b],
        writingSystem: WritingSystem.Abugida,
        script: 'Tibetan',
        language: 'Lhasa Tibetan',
    },
    glyph_4_p7: { // ??
        codePoint: [0x414],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Russian',
    },
    glyph_5_n7: { // ????
        codePoint: [0x1f90c],
        writingSystem: WritingSystem.Pictography,
        script: 'Emoji',
        language: null,
    },
    glyph_5_n6: { // ????
        codePoint: [0x110e4],
        writingSystem: WritingSystem.Alphabet,
        script: 'Sorang Sompeng',
        language: 'Sora',
    },
    glyph_5_n5: { // ???
        codePoint: [0xa565],
        writingSystem: WritingSystem.Syllabary,
        script: 'Vai',
        language: 'Vai',
    },
    glyph_5_n4: { // ???
        codePoint: [0x990],
        writingSystem: WritingSystem.Abugida,
        script: 'Bengali-Assamese',
        language: 'Assamese',
    },
    glyph_5_n3: { // ??
        codePoint: [0x464],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Old Church Slavonic',
    },
    glyph_5_n2: { // ??
        codePoint: [0xdf],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'German',
    },
    glyph_5_n1: { // ???
        codePoint: [0xa90],
        writingSystem: WritingSystem.Abugida,
        script: 'Gujarati',
        language: 'Gujarati',
    },
    glyph_5_0: { // ???
        codePoint: [0x2d63],
        writingSystem: WritingSystem.Alphabet,
        script: 'Tifinagh',
        language: 'Tashelhit',
    },
    glyph_5_p1: { // ???
        codePoint: [0x800],
        writingSystem: WritingSystem.Abjad,
        script: "Samaritan",
        language: 'Samaritan Hebrew',
    },
    glyph_5_p2: { // ???
        codePoint: [0x13ce],
        writingSystem: WritingSystem.Syllabary,
        script: "Cherokee",
        language: "Cherokee",
    },
    glyph_5_p3: { // ??
        codePoint: [0x424],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Tajik',
    },
    glyph_5_p4: { // ???
        codePoint: [0xa996],
        writingSystem: WritingSystem.Abugida,
        script: 'Javanese',
        language: 'Javanese',
    },
    glyph_5_p5: { // ??
        codePoint: [0x42d],
        writingSystem: WritingSystem.Alphabet,
        script: 'Cyrillic',
        language: 'Tuvan',
    },
    glyph_5_p6: { // ??
        codePoint: [0x623],
        writingSystem: WritingSystem.Abjad,
        script: 'Arabic',
        language: 'Farsi',
    },
    glyph_5_p7: { // ????
        codePoint: [0x16b15],
        writingSystem: WritingSystem.Semisyllabary,
        script: 'Pahawh Hmong',
        language: 'Hmong Daw',
    },
    glyph_6_n7: { // ???
        codePoint: [0x922],
        writingSystem: WritingSystem.Abugida,
        script: 'Devanagari',
        language: 'Hindi',
    },
    glyph_6_n6: { // ???
        codePoint: [0x81e3],
        writingSystem: WritingSystem.Logosyllabary,
        script: 'Han',
        language: 'Mandarin',
    },
    glyph_6_n5: { // ???
        codePoint: [0xa90e],
        writingSystem: WritingSystem.Alphabet,
        script: 'Kayah Li',
        language: 'Eastern Kayah',
    },
    glyph_6_n4: { // ???
        codePoint: [0xabc4],
        writingSystem: WritingSystem.Abugida,
        script: 'Meitei',
        language: 'Manipuri',
    },
    glyph_6_n3: { // ???
        codePoint: [0x1210],
        writingSystem: WritingSystem.Abugida,
        script: "Ge'ez",
        language: 'Tigrinya',
    },
    glyph_6_n2: { // ???
        codePoint: [0x10d6],
        writingSystem: WritingSystem.Alphabet,
        script: 'Georgian',
        language: 'Georgian',
    },
    glyph_6_n1: { // ????
        codePoint: [0x118ff],
        writingSystem: WritingSystem.Alphabet,
        script: 'Warang Citi',
        language: 'Ho',
    },
    glyph_6_0: { // ????
        codePoint: [0x104c3],
        writingSystem: WritingSystem.Alphabet,
        script: 'Osage',
        language: 'Osage',
    },
    glyph_6_p1: { // ???
        codePoint: [0xe2c],
        writingSystem: WritingSystem.Abugida,
        script: 'Thai',
        language: 'Thai',
    },
    glyph_6_p2: { // ??(hebrew)
        codePoint: [0x5d7],
        writingSystem: WritingSystem.Abjad,
        script: 'Hebrew',
        language: 'Hebrew',
    },
    glyph_6_p3: { // ??
        codePoint: [0x110],
        writingSystem: WritingSystem.Alphabet,
        script: 'Latin',
        language: 'Vietnamese',
    },
    glyph_6_p4: { // ????
        codePoint: [0x1f332],
        writingSystem: WritingSystem.Pictography,
        script: 'Emoji',
        language: null,
    },
    glyph_6_p5: { // ???
        codePoint: [0xc94],
        writingSystem: WritingSystem.Abugida,
        script: 'Kannada',
        language: 'Kannada',
    },
    glyph_6_p6: { // ???
        codePoint: [0x1981],
        writingSystem: WritingSystem.Abugida,
        script: 'New Tai Lue',
        language: 'Tai Lue',
    },
    glyph_6_p7: { // ????
        codePoint: [0x10d0d],
        writingSystem: WritingSystem.Alphabet,
        script: 'Hanifi Rohingya',
        language: 'Rohingya',
    }
}