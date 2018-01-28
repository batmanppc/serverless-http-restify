# serverless-http-restify

Use serverless-http (https://github.com/dougmoscrop/serverless-http) + restify (http://restify.com/) to build api's on aws infrastructure

## Important

Require this package, before requiring restify.

This is because restify modifies http.IncomingMessage and http.ServerResponse base classes. As serverless-http depends on their original implementation, we need to use them before restify modifies them.