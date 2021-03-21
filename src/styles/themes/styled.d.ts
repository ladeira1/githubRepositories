import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      primary: string;
      secondary: string;
      red: string;
      redLight: string;
      text: string;
      textSecondary: string;
      textTitle: string;
      whitePure: string;
    };
    fonts: {
      primary: string;
    };
    fontWeight: {
      regular: number;
      semiBold: number;
      bold: number;
    };
  }
}
