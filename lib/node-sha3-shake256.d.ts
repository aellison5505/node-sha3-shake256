
export function init(state: Buffer): number

export function adsorb(state: Buffer, input: Buffer): number

export function squeeze(output: Buffer, state: Buffer): number

export function finalize(state: Buffer): number

export function release(state: Buffer): number

export function syncShake256(output: Buffer, input: Buffer): number
