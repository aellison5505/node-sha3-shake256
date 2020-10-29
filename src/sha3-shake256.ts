import { Transform, TransformOptions, TransformCallback } from 'stream';
import { initState, releaseState, finalize, adsorb, squeeze } from './index'
export class Sha3Shake256Stream extends Transform{

    private _initState: Buffer;
    
    constructor(options: TransformOptions) {
        super(options);
        this._initState = Buffer.alloc(0);
             
    }

    private _init() {
        this._initState = Buffer.alloc(8);
        initState(this._initState);
    }

    private _clearState() {
        releaseState(this._initState);
        this._initState = Buffer.alloc(0)
    }

    _destroy() {
        if(this._initState.length === 8){
            this._clearState();
        }
    }

    _final(callback: TransformCallback) {
        if(this._initState.length === 8){
            finalize(this._initState);
            let hash = Buffer.alloc(32,0);
            squeeze(hash, this._initState);
            this.push(hash);
            this._clearState();
            this._final(callback);
            return;
        }else if(this.readableLength > 0) {
            this.emit('readable');
            this._final(callback);
            return;
        }else{
            this.push(null);
            callback();
        }
    }

    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback) {
        if(this._initState.length === 0) {
            this._init();
            this._transform(chunk, encoding, callback);
            return;
        } else if(this._initState.length === 8) {
            adsorb(this._initState, chunk);
            callback();
        } else {
            callback(new Error('invalid state'));
        }
    }
}