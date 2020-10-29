"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha3Shake256Stream = void 0;
const stream_1 = require("stream");
const index_1 = require("./index");
class Sha3Shake256Stream extends stream_1.Transform {
    constructor(options) {
        super(options);
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
            let hash = Buffer.alloc(32, 0);
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
exports.Sha3Shake256Stream = Sha3Shake256Stream;
//# sourceMappingURL=sha3-shake256.js.map