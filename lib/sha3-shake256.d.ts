/// <reference types="node" />
import { Transform, TransformOptions, TransformCallback } from 'stream';
/**
 * Hashes a message and returns a buffer.
 *
 * @param input message to hash
 * @param hashLength length of returned hash
 * @return Buffer
 */
export declare function shake256(input: Buffer, hashLength?: number): Buffer;
/**
 * Hashes a message and returns a promise.
 *
 * @param input message to hash
 * @param hashLength length of returned hash
 * @returns promise Buffer
 */
export declare function asyncShake256(input: Buffer, hashLength?: number): Promise<Buffer>;
/**
 * Creates a nodejs stream instance that hashes a message.
 * The read data is the hash.
 */
export declare class Shake256Stream extends Transform {
    private hashLength;
    private _initState;
    /**
     * Creates a nodejs stream instance that hashes a message.
     * The read data is the hash.
     *
     * @param hashLength length of returned hash
     * @param options Nodejs stream options.
     * @emits readable
     *
     */
    constructor(hashLength?: number, options?: TransformOptions);
    private _init;
    private _clearState;
    _destroy(): void;
    _final(callback: TransformCallback): void;
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void;
}
//# sourceMappingURL=sha3-shake256.d.ts.map