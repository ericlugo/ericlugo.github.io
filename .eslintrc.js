module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  "react/jsx-pascal-case": [
    1,
    { 
      allowAllCaps: true,
      allowNamespace: false,
      allowLeadingUnderscore: true
    }
  ]
}