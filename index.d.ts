
/// <reference types="aws-lambda" />

import { Server } from "restify";

export function serverless(app: Server, opts: Object): (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, callback: AWSLambda.ProxyCallback) => void;
