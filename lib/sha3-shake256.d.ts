/// <reference types="node" />
import { Transform, TransformOptions, TransformCallback } from 'stream';
export declare function shake256(input: Buffer, hashLength?: number): Buffer;
export declare function asyncShake256(input: Buffer, hashLength?: number): Promise<Buffer>;
export declare class Shake256Stream extends Transform {
    private hashLength;
    private _initState;
    constructor(hashLength?: number, options?: TransformOptions);
    private _init;
    private _clearState;
    _destroy(): void;
    _final(callback: TransformCallback): void;
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void;
}
//# sourceMappingURL=sha3-shake256.d.ts.map