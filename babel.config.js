module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      { 
        targets: '> 1%', 
        useBuiltIns: 'usage', 
        corejs: 3 
      }
    ],
    '@babel/preset-react',
  ]
};