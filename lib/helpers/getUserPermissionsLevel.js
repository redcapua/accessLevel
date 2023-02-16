const { ACCESS_LEVEL } = require('../constants/constants.permissions');

const getUserPermissionsLevel = (userPermissionsObject) => {
  const keysOfAccessLevel = Object.keys(ACCESS_LEVEL);
  let maxAccessLevel = 0;

  for (const key of Object.keys(userPermissionsObject)) {
    if (!keysOfAccessLevel.includes(key)) {
      continue;
    }
    if (userPermissionsObject[key] === false) {
      continue;
    }
    if (ACCESS_LEVEL[key] > maxAccessLevel) {
      maxAccessLevel = ACCESS_LEVEL[key];
    }
  }
  return maxAccessLevel;
};

module.exports = { getUserPermissionsLevel };
