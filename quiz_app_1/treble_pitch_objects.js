// array to hold treble objects
var trebleList = [];

// var treble {} is an object
// inside of treble are 17 pitches, which are objects
// each pitch has 4 key:value pairs

var treble = {
   a4: {
        imgName: 'treble_a4.png',
        pitch: 'a',
        lineOrSpace: 'space',
        staffPosition: 'in'
    },

    a5: {
        imgName: 'treble_a5.png',
        pitch: 'a',
        lineOrSpace: 'line',
        staffPosition: 'above'
    },

    b4: {
        imgName: 'treble_b4.png',
        pitch: 'b',
        lineOrSpace: 'line',
        staffPosition: 'in'
    },

    b5: {
        imgName: 'treble_b5.png',
        pitch: 'b',
        lineOrSpace: 'space',
        staffPosition: 'above'
    },

    c4: {
        imgName: 'treble_c4.png',
        pitch: 'c',
        lineOrSpace: 'line',
        staffPosition: 'below'
    },

    c5: {
        imgName: 'treble_c5.png',
        pitch: 'c',
        lineOrSpace: 'space',
        staffPosition: 'in'
    },

    c6: {
        imgName: 'treble_c6.png',
        pitch: 'c',
        lineOrSpace: 'line',
        staffPosition: 'above'
    },

    d4: {
        imgName: 'treble_d4.png',
        pitch: 'd',
        lineOrSpace: 'space',
        staffPosition: 'below'
    },

    d5: {
        imgName: 'treble_d5.png',
        pitch: 'd',
        lineOrSpace: 'line',
        staffPosition: 'in'
    },

    d6: {
        imgName: 'treble_d6.png',
        pitch: 'd',
        lineOrSpace: 'space',
        staffPosition: 'above'
    },

    e4: {
        imgName: 'treble_e4.png',
        pitch: 'e',
        lineOrSpace: 'line',
        staffPosition: 'in'
    },

    e5: {
        imgName: 'treble_e5.png',
        pitch: 'e',
        lineOrSpace: 'space',
        staffPosition: 'in'
    },

    e6: {
        imgName: 'treble_e6.png',
        pitch: 'e',
        lineOrSpace: 'line',
        staffPosition: 'above'
    },

    f4: {
        imgName: 'treble_f4.png',
        pitch: 'f',
        lineOrSpace: 'space',
        staffPosition: 'in'
    },

    f5: {
        imgName: 'treble_f5.png',
        pitch: 'f',
        lineOrSpace: 'line',
        staffPosition: 'in'
    },

    g4: {
        imgName: 'treble_g4.png',
        pitch: 'g',
        lineOrSpace: 'line',
        staffPosition: 'in'
    },

    g5: {
        imgName: 'treble_g5.png',
        pitch: 'g',
        lineOrSpace: 'line',
        staffPosition: 'above'
    }
};

trebleList = [
    treble.a4, treble.a5,
    treble.b4, treble.b5,
    treble.c4, treble.c5, treble.c6,
    treble.d4, treble.d5, treble.d6,
    treble.e4, treble.e5, treble.e6,
    treble.f4, treble.f5,
    treble.g4, treble.g5
];
