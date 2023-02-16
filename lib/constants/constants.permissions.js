const { SERVICE_MANAGER, ACCOUNT_MANAGER, SUPERVISOR } = require('./constants');

const ACCESS_LEVEL = {
  level1: 1,
  level2: 2,
  level3: 4,
  level4: 8,
  [SERVICE_MANAGER]: 16,
  level6: 32,
  level7: 64,
  level8: 128,
  level9: 256,
  level10: 512,
  [ACCOUNT_MANAGER]: 1024,
  level12: 2048,
  level13: 4096,
  level14: 8192,
  [SUPERVISOR]: 16384,
  level16: 32768,
  level17: 65536,
};

module.exports = { ACCESS_LEVEL };