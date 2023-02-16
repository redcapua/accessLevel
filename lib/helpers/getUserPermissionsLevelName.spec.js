const {
  SERVICE_MANAGER,
  SUPERVISOR,
  ACCOUNT_MANAGER,
} = require('../accessLevel');
const { ACCESS_LEVEL } = require('../constants/constants.permissions');
const {
  getUserPermissionsLevelName,
} = require('../helpers/getUserPermissionsLevelName');

const assert = require('assert');

describe('Get permisison level number value', function () {
  describe('#string values from JSON variable', function () {
    const permissionObject = {
      accountManager: false,
      serviceManager: false,
      supervisor: false,
    };

    beforeEach(function () {
      permissionObject[ACCOUNT_MANAGER] = false;
      permissionObject[SERVICE_MANAGER] = false;
      permissionObject[SUPERVISOR] = false;
    });

    it('should return empty string for permission object with unknownKey', function () {
      const resultValue = getUserPermissionsLevelName({ unknownKey: true });
      assert.equal(0, resultValue);
    });

    it('should return empty row for permission object without role', function () {
      const resultValue = getUserPermissionsLevelName(permissionObject);
      assert.equal(0, resultValue);
    });

    it('should return serviceManager for SERVICE_MANAGER', function () {
      permissionObject[SERVICE_MANAGER] = true;
      const resultValue = getUserPermissionsLevelName(permissionObject);

      assert.equal(SERVICE_MANAGER, resultValue);
    });

    it('should return accountManager for ACCOUNT_MANAGER', function () {
      permissionObject[ACCOUNT_MANAGER] = true;
      const resultValue = getUserPermissionsLevelName(permissionObject);
      assert.equal(ACCOUNT_MANAGER, resultValue);
    });

    it('should return accountManager for ACCOUNT_MANAGER, user has 2 roles', function () {
      permissionObject[SERVICE_MANAGER] = true;
      permissionObject[ACCOUNT_MANAGER] = true;

      const resultValue = getUserPermissionsLevelName(permissionObject);
      assert.equal(ACCOUNT_MANAGER, resultValue);
    });

    it('should return supervisor for SUPERVISOR', function () {
      permissionObject[SUPERVISOR] = true;

      const resultValue = getUserPermissionsLevelName(permissionObject);
      assert.equal(SUPERVISOR, resultValue);
    });
  });
});
