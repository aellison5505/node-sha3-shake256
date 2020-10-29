"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shake256Stream = exports.asyncShake256 = void 0;
const stream_1 = require("stream");
const index_1 = require("./index");
function asyncShake256(input, hashLength = 32) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((ret) => {
            let reBuffer = Buffer.alloc(hashLength, 0);
            index_1.syncShake256(reBuffer, input);
            ret(reBuffer);
        });
    });
}
exports.asyncShake256 = asyncShake256;
class Shake256Stream extends stream_1.Transform {
    constructor(hashLength = 32, options) {
        super(options);
        this.hashLength = hashLength;
        this._initState = Buffer.alloc(0);
    }
    _init() {
        this._initState = Buffer.alloc(8);
        index_1.initState(this._initState);
    }
    _clearState() {
        index_1.releaseState(this._initState);
        this._initState = Buffer.alloc(0);
    }
    _destroy() {
        if (this._initState.length === 8) {
            this._clearState();
        }
    }
    _final(callback) {
        if (this._initState.length === 8) {
            index_1.finalize(this._initState);
            let hash = Buffer.alloc(this.hashLength, 0);
            index_1.squeeze(hash, this._initState);
            this.push(hash);
            this._clearState();
            this._final(callback);
            return;
        }
        else if (this.readableLength > 0) {
            this.emit('readable');
            this._final(callback);
            return;
        }
        else {
            this.push(null);
            callback();
        }
    }
    _transform(chunk, encoding, callback) {
        if (this._initState.length === 0) {
            this._init();
            this._transform(chunk, encoding, callback);
            return;
        }
        else if (this._initState.length === 8) {
            index_1.adsorb(this._initState, chunk);
            callback();
        }
        else {
            callback(new Error('invalid state'));
        }
    }
}
exports.Shake256Stream = Shake256Stream;
//# sourceMappingURL=sha3-shake256.js.map