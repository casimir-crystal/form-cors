'use strict';

function formCors(options) {
  const defaults = {
    whitelist: [],
    exception: Error('Only accept AJAX request, no form post.'),
  }
  options = Object.assign({}, defaults, options);

  return function allowXhrOnlyMiddleware(req, res, next) {
    if (options.whitelist.includes(req.origin)) {
      return next();
    }

    if (req.header('content-type') === 'application/x-www-form-urlencoded') {
      throw new options.exception;
    }

    return next();
  }
}

export default formCors;
module.exports = formCors;
