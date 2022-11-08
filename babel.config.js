module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        alias: {
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@enums': './src/enums',
        },
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
