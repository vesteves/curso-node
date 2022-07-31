"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseDefault = void 0;
const responseDefault = (data, message, count) => {
    return {
        data,
        message,
        count,
    };
};
exports.responseDefault = responseDefault;
exports.default = exports.responseDefault;
