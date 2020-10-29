**[sha3-shake256](../README.md)**

> [Globals](../globals.md) / ["sha3-shake256"](../modules/_sha3_shake256_.md) / Shake256Stream

# Class: Shake256Stream

Creates a nodejs stream instance that hashes a message.
The read data is the hash.

## Hierarchy

* Transform

  ↳ **Shake256Stream**

## Implements

* ReadableStream
* Writable

## Index

### Constructors

* [constructor](_sha3_shake256_.shake256stream.md#constructor)

### Properties

* [\_initState](_sha3_shake256_.shake256stream.md#_initstate)
* [destroyed](_sha3_shake256_.shake256stream.md#destroyed)
* [hashLength](_sha3_shake256_.shake256stream.md#hashlength)
* [readable](_sha3_shake256_.shake256stream.md#readable)
* [readableEncoding](_sha3_shake256_.shake256stream.md#readableencoding)
* [readableEnded](_sha3_shake256_.shake256stream.md#readableended)
* [readableFlowing](_sha3_shake256_.shake256stream.md#readableflowing)
* [readableHighWaterMark](_sha3_shake256_.shake256stream.md#readablehighwatermark)
* [readableLength](_sha3_shake256_.shake256stream.md#readablelength)
* [readableObjectMode](_sha3_shake256_.shake256stream.md#readableobjectmode)
* [writable](_sha3_shake256_.shake256stream.md#writable)
* [writableCorked](_sha3_shake256_.shake256stream.md#writablecorked)
* [writableEnded](_sha3_shake256_.shake256stream.md#writableended)
* [writableFinished](_sha3_shake256_.shake256stream.md#writablefinished)
* [writableHighWaterMark](_sha3_shake256_.shake256stream.md#writablehighwatermark)
* [writableLength](_sha3_shake256_.shake256stream.md#writablelength)
* [writableObjectMode](_sha3_shake256_.shake256stream.md#writableobjectmode)

### Methods

* [[Symbol.asyncIterator]](_sha3_shake256_.shake256stream.md#[symbol.asynciterator])
* [\_clearState](_sha3_shake256_.shake256stream.md#_clearstate)
* [\_destroy](_sha3_shake256_.shake256stream.md#_destroy)
* [\_final](_sha3_shake256_.shake256stream.md#_final)
* [\_flush](_sha3_shake256_.shake256stream.md#_flush)
* [\_init](_sha3_shake256_.shake256stream.md#_init)
* [\_read](_sha3_shake256_.shake256stream.md#_read)
* [\_transform](_sha3_shake256_.shake256stream.md#_transform)
* [\_write](_sha3_shake256_.shake256stream.md#_write)
* [\_writev](_sha3_shake256_.shake256stream.md#_writev)
* [addListener](_sha3_shake256_.shake256stream.md#addlistener)
* [cork](_sha3_shake256_.shake256stream.md#cork)
* [destroy](_sha3_shake256_.shake256stream.md#destroy)
* [emit](_sha3_shake256_.shake256stream.md#emit)
* [end](_sha3_shake256_.shake256stream.md#end)
* [eventNames](_sha3_shake256_.shake256stream.md#eventnames)
* [getMaxListeners](_sha3_shake256_.shake256stream.md#getmaxlisteners)
* [isPaused](_sha3_shake256_.shake256stream.md#ispaused)
* [listenerCount](_sha3_shake256_.shake256stream.md#listenercount)
* [listeners](_sha3_shake256_.shake256stream.md#listeners)
* [off](_sha3_shake256_.shake256stream.md#off)
* [on](_sha3_shake256_.shake256stream.md#on)
* [once](_sha3_shake256_.shake256stream.md#once)
* [pause](_sha3_shake256_.shake256stream.md#pause)
* [pipe](_sha3_shake256_.shake256stream.md#pipe)
* [prependListener](_sha3_shake256_.shake256stream.md#prependlistener)
* [prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)
* [push](_sha3_shake256_.shake256stream.md#push)
* [rawListeners](_sha3_shake256_.shake256stream.md#rawlisteners)
* [read](_sha3_shake256_.shake256stream.md#read)
* [removeAllListeners](_sha3_shake256_.shake256stream.md#removealllisteners)
* [removeListener](_sha3_shake256_.shake256stream.md#removelistener)
* [resume](_sha3_shake256_.shake256stream.md#resume)
* [setDefaultEncoding](_sha3_shake256_.shake256stream.md#setdefaultencoding)
* [setEncoding](_sha3_shake256_.shake256stream.md#setencoding)
* [setMaxListeners](_sha3_shake256_.shake256stream.md#setmaxlisteners)
* [uncork](_sha3_shake256_.shake256stream.md#uncork)
* [unpipe](_sha3_shake256_.shake256stream.md#unpipe)
* [unshift](_sha3_shake256_.shake256stream.md#unshift)
* [wrap](_sha3_shake256_.shake256stream.md#wrap)
* [write](_sha3_shake256_.shake256stream.md#write)
* [from](_sha3_shake256_.shake256stream.md#from)

## Constructors

### constructor

\+ **new Shake256Stream**(`hashLength?`: number, `options?`: TransformOptions): [Shake256Stream](_sha3_shake256_.shake256stream.md)

*Overrides void*

*Defined in [src/sha3-shake256.ts:38](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L38)*

Creates a nodejs stream instance that hashes a message.
The read data is the hash.

**`emits`** readable

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`hashLength` | number | 32 | length of returned hash |
`options?` | TransformOptions | - | Nodejs stream options. |

**Returns:** [Shake256Stream](_sha3_shake256_.shake256stream.md)

## Properties

### \_initState

• `Private` **\_initState**: Buffer

*Defined in [src/sha3-shake256.ts:38](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L38)*

___

### destroyed

•  **destroyed**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[destroyed](_sha3_shake256_.shake256stream.md#destroyed)*

*Defined in node_modules/@types/node/stream.d.ts:35*

___

### hashLength

• `Private` **hashLength**: number

*Defined in [src/sha3-shake256.ts:49](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L49)*

length of returned hash

___

### readable

•  **readable**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readable](_sha3_shake256_.shake256stream.md#readable)*

*Defined in node_modules/@types/node/stream.d.ts:28*

___

### readableEncoding

• `Readonly` **readableEncoding**: BufferEncoding \| null

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableEncoding](_sha3_shake256_.shake256stream.md#readableencoding)*

*Defined in node_modules/@types/node/stream.d.ts:29*

___

### readableEnded

• `Readonly` **readableEnded**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableEnded](_sha3_shake256_.shake256stream.md#readableended)*

*Defined in node_modules/@types/node/stream.d.ts:30*

___

### readableFlowing

• `Readonly` **readableFlowing**: boolean \| null

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableFlowing](_sha3_shake256_.shake256stream.md#readableflowing)*

*Defined in node_modules/@types/node/stream.d.ts:31*

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableHighWaterMark](_sha3_shake256_.shake256stream.md#readablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:32*

___

### readableLength

• `Readonly` **readableLength**: number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableLength](_sha3_shake256_.shake256stream.md#readablelength)*

*Defined in node_modules/@types/node/stream.d.ts:33*

___

### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[readableObjectMode](_sha3_shake256_.shake256stream.md#readableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:34*

___

### writable

• `Readonly` **writable**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writable](_sha3_shake256_.shake256stream.md#writable)*

*Defined in node_modules/@types/node/stream.d.ts:247*

___

### writableCorked

• `Readonly` **writableCorked**: number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableCorked](_sha3_shake256_.shake256stream.md#writablecorked)*

*Defined in node_modules/@types/node/stream.d.ts:253*

___

### writableEnded

• `Readonly` **writableEnded**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableEnded](_sha3_shake256_.shake256stream.md#writableended)*

*Defined in node_modules/@types/node/stream.d.ts:248*

___

### writableFinished

• `Readonly` **writableFinished**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableFinished](_sha3_shake256_.shake256stream.md#writablefinished)*

*Defined in node_modules/@types/node/stream.d.ts:249*

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableHighWaterMark](_sha3_shake256_.shake256stream.md#writablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:250*

___

### writableLength

• `Readonly` **writableLength**: number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableLength](_sha3_shake256_.shake256stream.md#writablelength)*

*Defined in node_modules/@types/node/stream.d.ts:251*

___

### writableObjectMode

• `Readonly` **writableObjectMode**: boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[writableObjectMode](_sha3_shake256_.shake256stream.md#writableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:252*

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<any>

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[[Symbol.asyncIterator]](_sha3_shake256_.shake256stream.md#[symbol.asynciterator])*

*Defined in node_modules/@types/node/stream.d.ts:124*

**Returns:** AsyncIterableIterator\<any>

___

### \_clearState

▸ `Private`**_clearState**(): void

*Defined in [src/sha3-shake256.ts:59](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L59)*

**Returns:** void

___

### \_destroy

▸ **_destroy**(): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:64](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L64)*

**Returns:** void

___

### \_final

▸ **_final**(`callback`: TransformCallback): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:70](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L70)*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | TransformCallback |

**Returns:** void

___

### \_flush

▸ **_flush**(`callback`: TransformCallback): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[_flush](_sha3_shake256_.shake256stream.md#_flush)*

*Defined in node_modules/@types/node/stream.d.ts:284*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | TransformCallback |

**Returns:** void

___

### \_init

▸ `Private`**_init**(): void

*Defined in [src/sha3-shake256.ts:54](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L54)*

**Returns:** void

___

### \_read

▸ **_read**(`size`: number): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[_read](_sha3_shake256_.shake256stream.md#_read)*

*Defined in node_modules/@types/node/stream.d.ts:37*

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

### \_transform

▸ **_transform**(`chunk`: Buffer, `encoding`: BufferEncoding, `callback`: TransformCallback): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:89](https://github.com/aellison5505/node-sha3-shake256/blob/deea335/src/sha3-shake256.ts#L89)*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | Buffer |
`encoding` | BufferEncoding |
`callback` | TransformCallback |

**Returns:** void

___

### \_write

▸ **_write**(`chunk`: any, `encoding`: BufferEncoding, `callback`: (error?: Error \| null) => void): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[_write](_sha3_shake256_.shake256stream.md#_write)*

*Defined in node_modules/@types/node/stream.d.ts:255*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | BufferEncoding |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### \_writev

▸ `Optional`**_writev**(`chunks`: Array\<{ chunk: any ; encoding: BufferEncoding  }>, `callback`: (error?: Error \| null) => void): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[_writev](_sha3_shake256_.shake256stream.md#_writev)*

*Defined in node_modules/@types/node/stream.d.ts:256*

#### Parameters:

Name | Type |
------ | ------ |
`chunks` | Array\<{ chunk: any ; encoding: BufferEncoding  }> |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### addListener

▸ **addListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:61*

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:62*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **addListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:63*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **addListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:65*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:66*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[addListener](_sha3_shake256_.shake256stream.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### cork

▸ **cork**(): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[cork](_sha3_shake256_.shake256stream.md#cork)*

*Defined in node_modules/@types/node/stream.d.ts:265*

**Returns:** void

___

### destroy

▸ **destroy**(`error?`: Error): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[destroy](_sha3_shake256_.shake256stream.md#destroy)*

*Defined in node_modules/@types/node/stream.d.ts:48*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** void

___

### emit

▸ **emit**(`event`: \"close\"): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |

**Returns:** boolean

▸ **emit**(`event`: \"data\", `chunk`: any): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:71*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`chunk` | any |

**Returns:** boolean

▸ **emit**(`event`: \"end\"): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:72*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |

**Returns:** boolean

▸ **emit**(`event`: \"error\", `err`: Error): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:73*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`err` | Error |

**Returns:** boolean

▸ **emit**(`event`: \"pause\"): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:74*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |

**Returns:** boolean

▸ **emit**(`event`: \"readable\"): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:75*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |

**Returns:** boolean

▸ **emit**(`event`: \"resume\"): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:76*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |

**Returns:** boolean

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[emit](_sha3_shake256_.shake256stream.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:77*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### end

▸ **end**(`cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[end](_sha3_shake256_.shake256stream.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:262*

#### Parameters:

Name | Type |
------ | ------ |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[end](_sha3_shake256_.shake256stream.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:263*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `encoding?`: BufferEncoding, `cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[end](_sha3_shake256_.shake256stream.md#end)*

*Defined in node_modules/@types/node/stream.d.ts:264*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |
`cb?` | undefined \| () => void |

**Returns:** void

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[eventNames](_sha3_shake256_.shake256stream.md#eventnames)*

*Defined in node_modules/@types/node/events.d.ts:77*

**Returns:** Array\<string \| symbol>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[getMaxListeners](_sha3_shake256_.shake256stream.md#getmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:69*

**Returns:** number

___

### isPaused

▸ **isPaused**(): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[isPaused](_sha3_shake256_.shake256stream.md#ispaused)*

*Defined in node_modules/@types/node/stream.d.ts:42*

**Returns:** boolean

___

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[listenerCount](_sha3_shake256_.shake256stream.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:73*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[listeners](_sha3_shake256_.shake256stream.md#listeners)*

*Defined in node_modules/@types/node/events.d.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[off](_sha3_shake256_.shake256stream.md#off)*

*Defined in node_modules/@types/node/events.d.ts:66*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:79*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:80*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **on**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:81*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:82*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **on**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:83*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:84*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:85*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[on](_sha3_shake256_.shake256stream.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:86*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:88*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:89*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **once**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:90*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:91*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **once**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:92*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:93*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:94*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[once](_sha3_shake256_.shake256stream.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:95*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### pause

▸ **pause**(): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[pause](_sha3_shake256_.shake256stream.md#pause)*

*Defined in node_modules/@types/node/stream.d.ts:40*

**Returns:** this

___

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[pipe](_sha3_shake256_.shake256stream.md#pipe)*

*Defined in node_modules/@types/node/stream.d.ts:5*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | WritableStream |

#### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined \| { end?: undefined \| false \| true  } |

**Returns:** T

___

### prependListener

▸ **prependListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:97*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:98*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:99*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:100*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:101*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:102*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:103*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependListener](_sha3_shake256_.shake256stream.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:104*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:106*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:107*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:108*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:109*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:110*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:111*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:112*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[prependOnceListener](_sha3_shake256_.shake256stream.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:113*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### push

▸ **push**(`chunk`: any, `encoding?`: BufferEncoding): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[push](_sha3_shake256_.shake256stream.md#push)*

*Defined in node_modules/@types/node/stream.d.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** boolean

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[rawListeners](_sha3_shake256_.shake256stream.md#rawlisteners)*

*Defined in node_modules/@types/node/events.d.ts:71*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### read

▸ **read**(`size?`: undefined \| number): any

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[read](_sha3_shake256_.shake256stream.md#read)*

*Defined in node_modules/@types/node/stream.d.ts:38*

#### Parameters:

Name | Type |
------ | ------ |
`size?` | undefined \| number |

**Returns:** any

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeAllListeners](_sha3_shake256_.shake256stream.md#removealllisteners)*

*Defined in node_modules/@types/node/events.d.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:115*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:116*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **removeListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:117*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:118*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **removeListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:119*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:120*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:121*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[removeListener](_sha3_shake256_.shake256stream.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:122*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### resume

▸ **resume**(): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[resume](_sha3_shake256_.shake256stream.md#resume)*

*Defined in node_modules/@types/node/stream.d.ts:41*

**Returns:** this

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: BufferEncoding): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[setDefaultEncoding](_sha3_shake256_.shake256stream.md#setdefaultencoding)*

*Defined in node_modules/@types/node/stream.d.ts:261*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | BufferEncoding |

**Returns:** this

___

### setEncoding

▸ **setEncoding**(`encoding`: BufferEncoding): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[setEncoding](_sha3_shake256_.shake256stream.md#setencoding)*

*Defined in node_modules/@types/node/stream.d.ts:39*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | BufferEncoding |

**Returns:** this

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[setMaxListeners](_sha3_shake256_.shake256stream.md#setmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### uncork

▸ **uncork**(): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[uncork](_sha3_shake256_.shake256stream.md#uncork)*

*Defined in node_modules/@types/node/stream.d.ts:266*

**Returns:** void

___

### unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[unpipe](_sha3_shake256_.shake256stream.md#unpipe)*

*Defined in node_modules/@types/node/stream.d.ts:43*

#### Parameters:

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** this

___

### unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): void

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[unshift](_sha3_shake256_.shake256stream.md#unshift)*

*Defined in node_modules/@types/node/stream.d.ts:44*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** void

___

### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[wrap](_sha3_shake256_.shake256stream.md#wrap)*

*Defined in node_modules/@types/node/stream.d.ts:45*

#### Parameters:

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** this

___

### write

▸ **write**(`chunk`: any, `encoding?`: BufferEncoding, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[write](_sha3_shake256_.shake256stream.md#write)*

*Defined in node_modules/@types/node/stream.d.ts:259*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

▸ **write**(`chunk`: any, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[write](_sha3_shake256_.shake256stream.md#write)*

*Defined in node_modules/@types/node/stream.d.ts:260*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

___

### from

▸ `Static`**from**(`iterable`: Iterable\<any> \| AsyncIterable\<any>, `options?`: ReadableOptions): Readable

*Inherited from [Shake256Stream](_sha3_shake256_.shake256stream.md).[from](_sha3_shake256_.shake256stream.md#from)*

*Defined in node_modules/@types/node/stream.d.ts:26*

A utility method for creating Readable Streams out of iterators.

#### Parameters:

Name | Type |
------ | ------ |
`iterable` | Iterable\<any> \| AsyncIterable\<any> |
`options?` | ReadableOptions |

**Returns:** Readable
