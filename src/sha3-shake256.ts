import { Transform, TransformOptions, TransformCallback } from 'stream';
import { initState, releaseState, finalize, adsorb, squeeze, syncShake256 } from './index'

/**
 * Hashes a message and returns a buffer.
 * 
 * @param input message to hash
 * @param hashLength length of returned hash
 * @return Buffer
 */
export function shake256(input: Buffer, hashLength: number = 32): Buffer {
    let reBuffer = Buffer.alloc(hashLength, 0);
    syncShake256(reBuffer, input);
    return reBuffer;
}

/**
 * Hashes a message and returns a promise.
 * 
 * @param input message to hash
 * @param hashLength length of returned hash
 * @returns promise Buffer
 */
export async function asyncShake256(input: Buffer, hashLength: number = 32): Promise<Buffer> {
    return new Promise<Buffer>((ret) => {
        let reBuffer = Buffer.alloc(hashLength, 0);
        syncShake256(reBuffer, input);
        ret(reBuffer);
    });
}

/**
 * Creates a nodejs stream instance that hashes a message.
 * The read data is the hash.
 */
export class Shake256Stream extends Transform{

    private _initState: Buffer;
    
    /**
     * Creates a nodejs stream instance that hashes a message.
     * The read data is the hash.
     * 
     * @param hashLength length of returned hash
     * @param options Nodejs stream options.
     * @emits readable
     *
     */
    constructor(private hashLength: number = 32, options?: TransformOptions) {
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
            let hash = Buffer.alloc(this.hashLength,0);
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