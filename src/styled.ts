export default interface ITheme {
    accent: string,
    dimAccent: string,
    btnAccent: string,
    error: string,
    success: string,
    bgMain: string,
    bgSecond: string,
    text: string,
    disable: string
}

export const baseTheme: ITheme = {
    accent: '#2ED9E5',
    dimAccent: '#1F9199',
    btnAccent: '#29C1CC',
    error: '#CB2020',
    success: "#14BA1A",
    bgMain: '#0F0F0F',
    bgSecond: '#232626',
    text: '#DFE5E5',
    disable: '#9E9E9E'
}