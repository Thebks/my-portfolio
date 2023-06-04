export const tokens = {

    //Brutal Red  "#ff5d5d"
    red: {
        100: "#ffdfdf",
        200: "#ffbebe",
        300: "#ff9e9e",
        400: "#ff7d7d",
        500: "#f97676",    //Custom Color
        600: "#cc4a4a",
        700: "#993838",
        800: "#662525",
        900: "#331313"
    },

    //Brutal Purple
    purple: {
        100: "#f8e5ff",
        200: "#f1cbff",
        300: "#ebb1ff",
        400: "#e497ff",
        500: "#dd7dff",
        600: "#b164cc",
        700: "#854b99",
        800: "#583266",
        900: "#2c1933"
    },

    //Brutal Orange
    orange: {
        100: "#fff0d9",
        200: "#ffe1b4",
        300: "#ffd28e",
        400: "#ffc369",
        500: "#ffb443",
        600: "#cc9036",
        700: "#996c28",
        800: "#66481b",
        900: "#33240d"
    },

    //Brutal Blue
    blue: {
        100: "#d7f8ff",
        200: "#aff1ff",
        300: "#88e9ff",
        400: "#60e2ff",
        500: "#38dbff",
        600: "#2dafcc",
        700: "#228399",
        800: "#165866",
        900: "#0b2c33"
    },

    //Brutal Black
    black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },

    //Brutal Green
    green: {
        100: "#ccffe3",
        200: "#99ffc8",
        300: "#66ffac",
        400: "#33ff91",
        500: "#00ff75",
        600: "#00cc5e",
        700: "#009946",
        800: "#00662f",
        900: "#003317"
    },

    //Brutal Yellow
    yellow: {
        100: "#fffdcd",
        200: "#fffb9a",
        300: "#fff968",
        400: "#fff735",
        500: "#fff503",
        600: "#ccc402",
        700: "#999302",
        800: "#666201",
        900: "#333101"
    },

    background: {
        main: "#FFFBEA",
        light: "#f0f0f0",
    },
};

export const themeSettings = {
    palette: {
        primary: {
            ...tokens.red,
            main: tokens.red[500],
            light: tokens.red[400],
        },
        secondary: {
            ...tokens.yellow,
            main: tokens.yellow[500],
        },
        green: {
            ...tokens.green,
        },
        background: {
            default: tokens.background.main,
            light: tokens.background.light,
        },
    },

    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 800,
            color: tokens.black[200],
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.black[300],
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.black[500],
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.black[700],
        },
    }
}

