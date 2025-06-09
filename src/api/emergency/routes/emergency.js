'use strict';

/**
 * emergency router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::emergency.emergency');
