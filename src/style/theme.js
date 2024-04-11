import { Box, extendTheme, themeTools } from 'native-base';
export const theme = extendTheme({
    colors: {
        primary: {
            100: '#DCF3F1',
            200: '#BAE6E3',
            300: '#97DAD5',
            400: '#75CDC7',
            500: '#52C1B9',
            600: '#52C1B9',
        },
        gray: {
            400: "#9EA3AE"
        },
        neutral: {
            100: '#F8F9FB',
            200: '#EEF1F6',
            300: '#E4E8EE',
            400: '#CDD3DD',
            500: '#A8B1BD',
            600: '#6A7381',
            700: '#49505A',
            800: '#1F2329',
            900: '#121417',
        },
        dark: {
            400: '#36324A',
            500: '#262337',
        },
        blue: {
            100: "#2F73DA"
        },
        orange: {
            100: "#EF8B2C"
        },
        success: {
            100: '#DDFDED',
            200: '#0AC295',
            300: '#09A57F',
            400: '#078364',
            500: '#027357',
        },
        error: {
            100: '#FCD2CF',
            300: '#DF320C',
            400: '#C61A0B',
            500: '#AE0A0A',
        },
        red: {
            100: "#FF7070"
        },
        bgcolor: {
            400: '#fff',
            500: '#EEF1F6',
        }
    },
    fontConfig: {
        Gilroy: {
            200: {
                normal: 'Gilroy-Thin',
            },
            300: {
                normal: 'Gilroy-Light',
            },
            400: {
                normal: 'Gilroy-Medium',
            },
            500: {
                normal: 'Gilroy-Medium',
            },
            600: {
                normal: 'Gilroy-SemiBold',
            },
            700: {
                normal: 'Gilroy-Bold',
            },
        },
    },
    fonts: {
        heading: 'Gilroy',
        body: 'Gilroy',
        mono: 'Gilroy',
    },
    config: {
        useSystemColorMode: false,
    },
    components: {
        Button: {
            baseStyle: props => {
                return {
                    rounded: 'full',
                    size: 'lg',
                    height: 55,
                    p: [4, 8, 4, 8],
                    //   px: 10,
                    _text: {
                        fontSize: 14,
                        fontWeight: 600,
                        // color: props.disabled ? 'neutral.500' : 'white',
                    },
                    _pressed: {
                        backgroundColor: 'primary.400',
                    },
                    _disabled: {
                        backgroundColor: 'neutral.400',
                        _text: {
                            color: '#000',
                        },
                    },
                };
            },
            defaultProps: {
                _pressed: {
                    backgroundColor: '#75CDC7',
                },
                _disabled: {
                    backgroundColor: '#A8B1BD',
                    _text: {
                        color: '#A8B1BD',
                    },
                },
            },
        },
        Text: {
            defaultProps: {
                _dark: {
                    color: '#fff',
                },
            },
        },
        Progress: {
            baseStyle: {
                innerBg: 'primary.500',
                bg: 'neutral.300',
            },
        },
        Toast: {
            baseStyle: {
                padding: 4,
                margin: 4,
            },
            defaultProps: {
                placement: 'top',
            },
        },
        Skeleton: {
            defaultProps: {
                startColor: 'coolGray.100',
                endColor: 'coolGray.200',
            },
        },
    },
});
