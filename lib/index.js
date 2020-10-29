"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shake256 = exports.asyncShake256 = exports.Shake256Stream = exports.syncShake256 = exports.squeeze = exports.releaseState = exports.initState = exports.finalize = exports.adsorb = void 0;
// export { Sha3Shake256 } from './sha3-shake256';
var node_sha3_shake256_1 = require("../lib/node-sha3-shake256");
Object.defineProperty(exports, "adsorb", { enumerable: true, get: function () { return node_sha3_shake256_1.adsorb; } });
Object.defineProperty(exports, "finalize", { enumerable: true, get: function () { return node_sha3_shake256_1.finalize; } });
Object.defineProperty(exports, "initState", { enumerable: true, get: function () { return node_sha3_shake256_1.initState; } });
Object.defineProperty(exports, "releaseState", { enumerable: true, get: function () { return node_sha3_shake256_1.releaseState; } });
Object.defineProperty(exports, "squeeze", { enumerable: true, get: function () { return node_sha3_shake256_1.squeeze; } });
Object.defineProperty(exports, "syncShake256", { enumerable: true, get: function () { return node_sha3_shake256_1.syncShake256; } });
var sha3_shake256_1 = require("./sha3-shake256");
Object.defineProperty(exports, "Shake256Stream", { enumerable: true, get: function () { return sha3_shake256_1.Shake256Stream; } });
Object.defineProperty(exports, "asyncShake256", { enumerable: true, get: function () { return sha3_shake256_1.asyncShake256; } });
Object.defineProperty(exports, "shake256", { enumerable: true, get: function () { return sha3_shake256_1.shake256; } });
//# sourceMappingURL=index.js.map