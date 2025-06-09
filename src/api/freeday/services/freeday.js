'use strict';

/**
 * freeday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::freeday.freeday');
