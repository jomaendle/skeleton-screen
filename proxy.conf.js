const PROXY_CONFIG = [
  {
    "context": [
      "/opr-web",
      "/topaz",
      "/iframe",
      "/odb",
      "/demo"
    ],
    "target": "http://localhost:3030",
    "secure": false
  }
];

module.exports = PROXY_CONFIG;
