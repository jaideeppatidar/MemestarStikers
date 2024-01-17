const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 * @type {import('metro-config').InputConfig}
 */
module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return mergeConfig(defaultConfig, {
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
      useWatchman: false,
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  });
};
