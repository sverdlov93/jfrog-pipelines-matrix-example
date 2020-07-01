module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'reports',
      uniqueOutputName: 'true'
    } ]
  ]
};