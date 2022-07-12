var AWS = require('../core')
var EventEmitter = require('events').EventEmitter
require('../http')

/**
 * @api private
 */
AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this
    var endpoint = httpRequest.endpoint
    var emitter = new EventEmitter()
    var href = endpoint.protocol + '//' + endpoint.hostname
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port
    }
    href += httpRequest.path

    wx.request({
      url: href,
      method: httpRequest.method,
      data: httpRequest.body,
      header: httpRequest.headers,
      complete(res) {
        emitter.statusCode = res.statusCode
        emitter.headers = res.header
        emitter.emit('headers', emitter.statusCode, emitter.headers, 'OK')

        var buffer
        // if (xhr.responseType === 'arraybuffer' && xhr.response) {
        //   var ab = xhr.response;
        //   buffer = new AWS.util.Buffer(ab.byteLength);
        //   var view = new Uint8Array(ab);
        //   for (var i = 0; i < buffer.length; ++i) {
        //     buffer[i] = view[i];
        //   }
        // }

        try {
          if (!buffer) {
            buffer = new AWS.util.Buffer(res.data)
          }
        } catch (e) {}

        if (buffer) emitter.emit('data', buffer)

        emitter.emit('end')
      }
    })

    callback(emitter)

    return emitter
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {}
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0]
      var value = line.substring(key.length + 2)
      if (key.length > 0) headers[key.toLowerCase()] = value
    })
    return headers
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response
      buffer = new AWS.util.Buffer(ab.byteLength)
      var view = new Uint8Array(ab)
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i]
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText)
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer)
    emitter.emit('end')
  }
})

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.XHRClient.prototype

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = 1
