
const Colors = {
    "Pink": {
        hex: "#B4008D",
        r: 180,
        g: 0,
        b: 140
    },
    "Yellow": {
        hex: "#FFB600",
        r: 255,
        g: 182,
        b: 0
    },
    "Purpple": {
        hex: "#1226AA",
        r: 18,
        g: 38,
        b: 170
    },
    "Green": {
        hex: "#00615C",
        r: 0,
        g: 97,
        b: 92
    },
    "Black": {
        hex: "#161616",
        r: 22,
        g: 22,
        b: 22
    },
    "Light-Blue": {
        hex: "#00BED6",
        r: 0,
        g: 190,
        b: 214
    },
    "White": {
        hex: "#FEFEFE",
        r: 254,
        g: 254,
        b: 254
    },
}

export const getHexColor = color => {
    return Colors[color].hex
}

export const getRGBColor = color => {
    return {
        r: Colors[color].r,
        g: Colors[color].g,
        b: Colors[color].b
    }
}

export default Colors