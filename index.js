const _ = require('lodash');
const slsHttp = require('serverless-http');
const SlsHttpRequest = require('serverless-http/lib/request');
const SlsHttpResponse = require('serverless-http/lib/response');
const patchRequest = require('restify/lib/request');
const patchResponse = require('restify/lib/response');

patchRequest(SlsHttpRequest);
patchResponse(SlsHttpResponse);

module.exports = {
    serverless: function (app, opts = {}) {
        const handler = (req, res) => {
            if(!!app._onRequest)
              _.get(app, '_onRequest').call(app, req, res);
            else {
              _.get(app, '_setupRequest').call(app, req, res);
              _.get(app, '_handle').call(app, req, res);
            }
        };

        return slsHttp(handler, opts);
    }
};
