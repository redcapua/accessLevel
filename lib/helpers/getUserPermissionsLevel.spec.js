const {
  SERVICE_MANAGER,
  SUPERVISOR,
  ACCOUNT_MANAGER,
} = require('../accessLevel');
const { ACCESS_LEVEL } = require('../constants/constants.permissions');
const {
  getUserPermissionsLevel,
} = require('../helpers/getUserPermissionsLevel');

const assert = require('assert');

describe('Get permisison level number value', function () {
  describe('#numeric values from constants', function () {
    it('should return 16 for SERVICE_MANAGER', function () {
      assert.equal(ACCESS_LEVEL[SERVICE_MANAGER], 16);
    });
    it('should return 1024 for ACCOUNT_MANAGER', function () {
      assert.equal(ACCESS_LEVEL[ACCOUNT_MANAGER], 1024);
    });
    it('should return 16384 for SERVICE_MANAGER', function () {
      assert.equal(ACCESS_LEVEL[SUPERVISOR], 16384);
    });
  });

  describe('#numeric values from JSON variable', function () {
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

    it('should return 0 for permission object with unknownKey', function () {
      const resultValue = getUserPermissionsLevel({ unknownKey: true });
      assert.equal(0, resultValue);
    });

    it('should return 0 for permission object without role', function () {
      const resultValue = getUserPermissionsLevel(permissionObject);
      assert.equal(0, resultValue);
    });

    it('should return 16 for SERVICE_MANAGER', function () {
      permissionObject[SERVICE_MANAGER] = true;
      const resultValue = getUserPermissionsLevel(permissionObject);

      assert.equal(ACCESS_LEVEL[SERVICE_MANAGER], resultValue);
    });

    it('should return 1024 for ACCOUNT_MANAGER', function () {
      permissionObject[ACCOUNT_MANAGER] = true;
      const resultValue = getUserPermissionsLevel(permissionObject);
      assert.equal(ACCESS_LEVEL[ACCOUNT_MANAGER], resultValue);
    });

    it('should return 1024 for ACCOUNT_MANAGER, user has 2 roles', function () {
      permissionObject[SERVICE_MANAGER] = true;
      permissionObject[ACCOUNT_MANAGER] = true;

      const resultValue = getUserPermissionsLevel(permissionObject);
      assert.equal(ACCESS_LEVEL[ACCOUNT_MANAGER], resultValue);
    });

    it('should return 16384 for SUPERVISOR', function () {
      permissionObject[SUPERVISOR] = true;

      const resultValue = getUserPermissionsLevel(permissionObject);
      assert.equal(ACCESS_LEVEL[SUPERVISOR], resultValue);
    });
  });
});
