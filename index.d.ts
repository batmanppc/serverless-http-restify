
/// <reference types="restify" />
/// <reference types="aws-lambda" />

export function serverless(app: Server): (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, callback: AWSLambda.ProxyCallback) => void;