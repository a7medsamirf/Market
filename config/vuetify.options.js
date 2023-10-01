let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('MedFoodDarkMode') || false
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'false',
    
    typography: {
      fontFamily: 'DINArabic',
    },
    font: {
      family: 'DINArabic' 
    },
    themes: {
      fontFamily: 'DINArabic, sans-serif',
      dark: {
        BgColor: '#272727',
        Gray50: '#1E1E1E',
        Gray400: '#666',
        Gray600: '#fff',
        TxColor: '#212529',
        background: '#1D1F1F',
        primary: '#62D0B6',
        secondary: '#333333',
        accent: '#82B1FF',
        error: '#dd3842',
        info: '#5196F3',
        success: '#00AF6C',
        warning: '#FFC62A',
        default: '#62D0B6',
      },
      light: {
        background: '#f1f5f6',
        BgColor: '#fff',
        Gray50: '#F8F8F8',
        Gray400: '#666',
        Gray600: '#333',
        TxColor: '#212529',
        background: '#1D1F1F',
        primary: '#62D0B6',
        secondary: '#333333',
        accent: '#82B1FF',
        error: '#dd3842',
        info: '#5196F3',
        success: '#00AF6C',
        warning: '#FFC62A',
        default: '#62D0B6',
      },

    },
    options: {
      customProperties: true
    }
  }
}
