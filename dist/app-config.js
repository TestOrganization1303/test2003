"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig = {
    hostName: 'api.veracode.com',
    applicationUri: '/appsec/v1/applications',
    findingsUri: '/appsec/v2/applications',
    sandboxUri: '/appsec/v1/applications/${appGuid}/sandboxes',
};
exports.default = appConfig;
