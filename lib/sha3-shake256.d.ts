/// <reference types="node" />
import { Transform, TransformOptions, TransformCallback } from 'stream';
export declare class Sha3Shake256Stream extends Transform {
    private _initState;
    constructor(options: TransformOptions);
    private _init;
    private _clearState;
    _destroy(): void;
    _final(callback: TransformCallback): void;
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: TransformCallback): void;
}
//# sourceMappingURL=sha3-shake256.d.ts.map