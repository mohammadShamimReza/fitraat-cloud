'use strict';

/**
 * emergency controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::emergency.emergency');
