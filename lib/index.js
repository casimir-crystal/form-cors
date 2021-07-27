'use strict';

function formCors(options) {
  const defaults = {
    allowList: [],
    exception: Error('Only accept AJAX request, no form post.'),
  }
  options = Object.assign({}, defaults, options);

  return function allowXhrOnlyMiddleware(req, res, next) {
    if (options.allowList.includes(req.origin)) {
      return next();
    }

    if (req.header('content-type') === 'application/x-www-form-urlencoded') {
      throw options.exception;
    }

    return next();
  }
}

module.exports = formCors;
