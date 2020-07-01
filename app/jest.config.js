module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'reports',
      outputName: 'jest-junit.xml',
      uniqueOutputName: true
    } ]
  ]
};