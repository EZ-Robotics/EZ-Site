import {themes, type PrismTheme} from 'prism-react-renderer';

// const baseTheme = themes.jettwaveDark;
const baseTheme = themes.oneDark;

export default {
    plain: {
        color: '#F2F2F2',
        backgroundColor: '#3D3D3D',
      },
      styles: [
        ...baseTheme.styles,
        {
            types: ['comment'],
            style: {
              color: '#ff63c2',
              fontStyle: "italic",
            },
          },
      ],
} satisfies PrismTheme;