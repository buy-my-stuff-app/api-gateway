/** Root routes
 * @module routes
 */

/**
 * @type {object}
 * @description Route /
 * @const
 * @namespace /
 */
const router = require('express').Router();

/**
 * @name Access denied
 * @description Indicates that the access is denied
 * @memberof module:routes~/
 * @path {GET} /not-authorized
 * @code {403} Access denied
 * @response {Object} 403:
 * @response {string} message Response message
 */
router.get('/not-authorized', (req, res) => {
  return res.status(403).json({
    message: 'Access denied',
  });
});

module.exports = router;
