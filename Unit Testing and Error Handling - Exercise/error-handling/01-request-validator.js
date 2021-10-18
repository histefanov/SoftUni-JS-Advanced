function validateRequest(request) {
    const validMethods = new Set(['GET', 'POST', 'DELETE', 'CONNECT']);
    const validVersions = new Set(['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']);
    const uriPattern = /^[\w.]+$/;
    const messagePattern = /^(?!.*[<>\\&'"]).*/;

    if (!validMethods.has(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.uri || !uriPattern.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.has(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (request.message == undefined || !messagePattern.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(validateRequest({ 
  method: 'OPTIONS', 
  uri: 'git.master', 
  version: 'HTTP/1.1', 
  message: '-recursive' 
}))