const { ACCESS_LEVEL } = require('../constants/constants.permissions');

const getUserPermissionsLevelName = (userPermissionsObject) => {
  const keysOfAccessLevel = Object.keys(ACCESS_LEVEL);
  let maxAccessLevel = 0;
  let maxAccessLevelName = '';

  for (const key of Object.keys(userPermissionsObject)) {
    if (!keysOfAccessLevel.includes(key)) {
      continue;
    }
    if (!userPermissionsObject[key]) {
      continue;
    }
    if (ACCESS_LEVEL[key] > maxAccessLevel) {
      maxAccessLevel = ACCESS_LEVEL[key];
      maxAccessLevelName = key;
    }
  }
  return maxAccessLevelName;
};

module.exports = { getUserPermissionsLevelName };
