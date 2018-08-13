import Typography from "typography"

const typography = new Typography({
    baseFontSize: "16px",
    googleFonts: [
        {
            name: 'Oxygen Mono',
            styles: ['400', '700'],
        },
        {
            name: 'Ubuntu Mono',
            styles: ['400', '700'],
        }
    ],
    headerFontFamily: ["Oxygen Mono", "monospace"],
    bodyFontFamily: ["Oxygen Mono", "monospace"],
});

export default typography
