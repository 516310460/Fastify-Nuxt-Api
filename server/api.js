// This file is autogenerated by server/main.js
export default ({ handlers, translateRequest, translateRequestWithPayload }) => ({
  hello: {
    msg (options = {}) {
      return translateRequest(handlers.hello.msg, {  }, '/api/hello', options)
    },
    msgWithInjection (options = {}) {
      return translateRequest(handlers.hello.msgWithInjection, {  }, '/api/hello-with-injection', options)
    },
  },
})