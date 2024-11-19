/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amarilloscuro: '#FCBF49',
        amarillo: '#F9DC5C',
        amarilloclaro: '#FAE588',
        amarilloblanco: '#FCF6BD',
        morado: '#5E548E',
        lilaoscuro: '#9F86C0',
        lilaclaro: '#BE95C4',
        lilablanco: '#BDB2FF',
        verdeoscuro: '#2D6A4F',
        verdeagua: '#43AA8B',
        verde: '#74D3AE',
        verdeclaro: '#80ED99',
        verdeblanco: '#C7F9CC',
        rosaoscuro: '#C9184A',
        rosa: '#FF4D6D',
        rosaclaro: '#FF8FAB',
        rosablanco: '#FFB3C1',
        blanco: '#EDEDE9',
        negro: '#000000',
      },
      fontFamily: {
        retro: ['VT323', 'sans-serif'],
        sister: ['Love Ya Like A Sister', 'sans-serif'],
        girl: ['Pangolin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
