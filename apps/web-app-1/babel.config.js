const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = (api) => {
  api.cache(true)

  console.log(
    '[Babel] using babel.config.js in apps/client-aircan; NODE_ENV: ',
    process.env.NODE_ENV || 'development'
  );
  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': isTest ? {node: 'current'} :'> 0.25%, not dead',
        'useBuiltIns': 'usage',
        'corejs': 3,
        'modules': isTest ? 'commonjs' : false
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
