'use strict';

/**
 * free-quizz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-quizz.free-quizz');
