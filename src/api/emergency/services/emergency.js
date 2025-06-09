'use strict';

/**
 * emergency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emergency.emergency');
