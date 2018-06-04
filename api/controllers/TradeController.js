/**
 * TradeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  postgres: {
    adapter: 'sails-postgresql',
    url: process.env.DATABASE_URL || 'postgres://localhost/trade'

  }

};

