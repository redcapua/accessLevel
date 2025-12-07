const {
  getUserPermissionsLevel,
} = require('./helpers/getUserPermissionsLevel');
const {
  getUserPermissionsLevelName, convertValueToNameOfAccessLevel
} = require('./helpers/getUserPermissionsLevelName');
const { ACCESS_LEVEL } = require('./constants/constants.permissions');
const {
  SERVICE_MANAGER,
  ACCOUNT_MANAGER,
  SUPERVISOR,
  GRANTED,
  PERMISSIONS,
} = require('./constants/constants');

module.exports = {
  getUserPermissionsLevel,
  getUserPermissionsLevelName,
  convertValueToNameOfAccessLevel,
  ACCESS_LEVEL,
  SERVICE_MANAGER,
  ACCOUNT_MANAGER,
  SUPERVISOR,
  GRANTED,
  PERMISSIONS,
};
