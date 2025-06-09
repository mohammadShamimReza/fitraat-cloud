'use strict';

/**
 * kagel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kagel.kagel');
