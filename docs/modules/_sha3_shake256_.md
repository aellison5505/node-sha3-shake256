**[sha3-shake256](../README.md)**

> [Globals](../globals.md) / "sha3-shake256"

# Module: "sha3-shake256"

## Index

### Classes

* [Shake256Stream](../classes/_sha3_shake256_.shake256stream.md)

### Functions

* [asyncShake256](_sha3_shake256_.md#asyncshake256)
* [shake256](_sha3_shake256_.md#shake256)

## Functions

### asyncShake256

▸ **asyncShake256**(`input`: Buffer, `hashLength?`: number): Promise\<Buffer>

*Defined in [src/sha3-shake256.ts:24](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L24)*

Hashes a message and returns a promise.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | message to hash |
`hashLength` | number | 32 | length of returned hash |

**Returns:** Promise\<Buffer>

promise Buffer

___

### shake256

▸ **shake256**(`input`: Buffer, `hashLength?`: number): Buffer

*Defined in [src/sha3-shake256.ts:11](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L11)*

Hashes a message and returns a buffer.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | message to hash |
`hashLength` | number | 32 | length of returned hash |

**Returns:** Buffer

Buffer
