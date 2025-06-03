'use strict';

/**
 * free-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-blog.free-blog');
