'use strict';

/**
 * pro-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pro-blog.pro-blog');
