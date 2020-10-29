<a name="readmemd"></a>

**[sha3-shake256](#readmemd)**

> [Globals](#globalsmd)

# node-sha3-shake256
[![Build Status](https://travis-ci.com/aellison5505/node-sha3-shake256.svg?branch=main)](https://travis-ci.com/aellison5505/node-sha3-shake256)
Fips202 Sha3 Shake256 hash from buffer or stream.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [node-sha3-shake256](#node-sha3-shake256)
- [Classes](#classes)
  - [Class: Shake256Stream](#class-shake256stream)
    - [Hierarchy](#hierarchy)
    - [Implements](#implements)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
- [sha3-shake256](#sha3-shake256)
  - [Index](#index-1)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: "index"](#module-index)
    - [Index](#index-2)
    - [References](#references)
  - [Module: "sha3-shake256"](#module-sha3-shake256)
    - [Index](#index-3)
    - [Functions](#functions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Classes


<a name="classes_sha3_shake256_shake256streammd"></a>

**[sha3-shake256](#readmemd)**

> [Globals](#globalsmd) / ["sha3-shake256"](#modules_sha3_shake256_md) / Shake256Stream

## Class: Shake256Stream

Creates a nodejs stream instance that hashes a message.
The read data is the hash.

### Hierarchy

* Transform

  ↳ **Shake256Stream**

### Implements

* ReadableStream
* Writable

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [\_initState](#_initstate)
* [destroyed](#destroyed)
* [hashLength](#hashlength)
* [readable](#readable)
* [readableEncoding](#readableencoding)
* [readableEnded](#readableended)
* [readableFlowing](#readableflowing)
* [readableHighWaterMark](#readablehighwatermark)
* [readableLength](#readablelength)
* [readableObjectMode](#readableobjectmode)
* [writable](#writable)
* [writableCorked](#writablecorked)
* [writableEnded](#writableended)
* [writableFinished](#writablefinished)
* [writableHighWaterMark](#writablehighwatermark)
* [writableLength](#writablelength)
* [writableObjectMode](#writableobjectmode)

#### Methods

* [[Symbol.asyncIterator]](_sha3_shake256_.shake256stream.md#[symbol.asynciterator])
* [\_clearState](#_clearstate)
* [\_destroy](#_destroy)
* [\_final](#_final)
* [\_flush](#_flush)
* [\_init](#_init)
* [\_read](#_read)
* [\_transform](#_transform)
* [\_write](#_write)
* [\_writev](#_writev)
* [addListener](#addlistener)
* [cork](#cork)
* [destroy](#destroy)
* [emit](#emit)
* [end](#end)
* [eventNames](#eventnames)
* [getMaxListeners](#getmaxlisteners)
* [isPaused](#ispaused)
* [listenerCount](#listenercount)
* [listeners](#listeners)
* [off](#off)
* [on](#on)
* [once](#once)
* [pause](#pause)
* [pipe](#pipe)
* [prependListener](#prependlistener)
* [prependOnceListener](#prependoncelistener)
* [push](#push)
* [rawListeners](#rawlisteners)
* [read](#read)
* [removeAllListeners](#removealllisteners)
* [removeListener](#removelistener)
* [resume](#resume)
* [setDefaultEncoding](#setdefaultencoding)
* [setEncoding](#setencoding)
* [setMaxListeners](#setmaxlisteners)
* [uncork](#uncork)
* [unpipe](#unpipe)
* [unshift](#unshift)
* [wrap](#wrap)
* [write](#write)
* [from](#from)

### Constructors

#### constructor

\+ **new Shake256Stream**(`hashLength?`: number, `options?`: TransformOptions): [Shake256Stream](#classes_sha3_shake256_shake256streammd)

*Overrides void*

*Defined in [src/sha3-shake256.ts:38](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L38)*

Creates a nodejs stream instance that hashes a message.
The read data is the hash.

**`emits`** readable

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`hashLength` | number | 32 | length of returned hash |
`options?` | TransformOptions | - | Nodejs stream options. |

**Returns:** [Shake256Stream](#classes_sha3_shake256_shake256streammd)

### Properties

#### \_initState

• `Private` **\_initState**: Buffer

*Defined in [src/sha3-shake256.ts:38](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L38)*

___

#### destroyed

•  **destroyed**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[destroyed](#destroyed)*

*Defined in node_modules/@types/node/stream.d.ts:35*

___

#### hashLength

• `Private` **hashLength**: number

*Defined in [src/sha3-shake256.ts:49](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L49)*

length of returned hash

___

#### readable

•  **readable**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readable](#readable)*

*Defined in node_modules/@types/node/stream.d.ts:28*

___

#### readableEncoding

• `Readonly` **readableEncoding**: BufferEncoding \| null

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableEncoding](#readableencoding)*

*Defined in node_modules/@types/node/stream.d.ts:29*

___

#### readableEnded

• `Readonly` **readableEnded**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableEnded](#readableended)*

*Defined in node_modules/@types/node/stream.d.ts:30*

___

#### readableFlowing

• `Readonly` **readableFlowing**: boolean \| null

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableFlowing](#readableflowing)*

*Defined in node_modules/@types/node/stream.d.ts:31*

___

#### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableHighWaterMark](#readablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:32*

___

#### readableLength

• `Readonly` **readableLength**: number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableLength](#readablelength)*

*Defined in node_modules/@types/node/stream.d.ts:33*

___

#### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[readableObjectMode](#readableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:34*

___

#### writable

• `Readonly` **writable**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writable](#writable)*

*Defined in node_modules/@types/node/stream.d.ts:247*

___

#### writableCorked

• `Readonly` **writableCorked**: number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableCorked](#writablecorked)*

*Defined in node_modules/@types/node/stream.d.ts:253*

___

#### writableEnded

• `Readonly` **writableEnded**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableEnded](#writableended)*

*Defined in node_modules/@types/node/stream.d.ts:248*

___

#### writableFinished

• `Readonly` **writableFinished**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableFinished](#writablefinished)*

*Defined in node_modules/@types/node/stream.d.ts:249*

___

#### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableHighWaterMark](#writablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:250*

___

#### writableLength

• `Readonly` **writableLength**: number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableLength](#writablelength)*

*Defined in node_modules/@types/node/stream.d.ts:251*

___

#### writableObjectMode

• `Readonly` **writableObjectMode**: boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[writableObjectMode](#writableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:252*

### Methods

#### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<any>

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[[Symbol.asyncIterator]](_sha3_shake256_.shake256stream.md#[symbol.asynciterator])*

*Defined in node_modules/@types/node/stream.d.ts:124*

**Returns:** AsyncIterableIterator\<any>

___

#### \_clearState

▸ `Private`**_clearState**(): void

*Defined in [src/sha3-shake256.ts:59](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L59)*

**Returns:** void

___

#### \_destroy

▸ **_destroy**(): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:64](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L64)*

**Returns:** void

___

#### \_final

▸ **_final**(`callback`: TransformCallback): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:70](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L70)*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | TransformCallback |

**Returns:** void

___

#### \_flush

▸ **_flush**(`callback`: TransformCallback): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[_flush](#_flush)*

*Defined in node_modules/@types/node/stream.d.ts:284*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | TransformCallback |

**Returns:** void

___

#### \_init

▸ `Private`**_init**(): void

*Defined in [src/sha3-shake256.ts:54](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L54)*

**Returns:** void

___

#### \_read

▸ **_read**(`size`: number): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[_read](#_read)*

*Defined in node_modules/@types/node/stream.d.ts:37*

##### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

#### \_transform

▸ **_transform**(`chunk`: Buffer, `encoding`: BufferEncoding, `callback`: TransformCallback): void

*Overrides void*

*Defined in [src/sha3-shake256.ts:89](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L89)*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | Buffer |
`encoding` | BufferEncoding |
`callback` | TransformCallback |

**Returns:** void

___

#### \_write

▸ **_write**(`chunk`: any, `encoding`: BufferEncoding, `callback`: (error?: Error \| null) => void): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[_write](#_write)*

*Defined in node_modules/@types/node/stream.d.ts:255*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | BufferEncoding |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

#### \_writev

▸ `Optional`**_writev**(`chunks`: Array\<{ chunk: any ; encoding: BufferEncoding  }>, `callback`: (error?: Error \| null) => void): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[_writev](#_writev)*

*Defined in node_modules/@types/node/stream.d.ts:256*

##### Parameters:

Name | Type |
------ | ------ |
`chunks` | Array\<{ chunk: any ; encoding: BufferEncoding  }> |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

#### addListener

▸ **addListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

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

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:62*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **addListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:63*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:64*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **addListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:65*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:66*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:67*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[addListener](#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:68*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### cork

▸ **cork**(): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[cork](#cork)*

*Defined in node_modules/@types/node/stream.d.ts:265*

**Returns:** void

___

#### destroy

▸ **destroy**(`error?`: Error): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[destroy](#destroy)*

*Defined in node_modules/@types/node/stream.d.ts:48*

##### Parameters:

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** void

___

#### emit

▸ **emit**(`event`: \"close\"): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:70*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |

**Returns:** boolean

▸ **emit**(`event`: \"data\", `chunk`: any): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:71*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`chunk` | any |

**Returns:** boolean

▸ **emit**(`event`: \"end\"): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:72*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |

**Returns:** boolean

▸ **emit**(`event`: \"error\", `err`: Error): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:73*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`err` | Error |

**Returns:** boolean

▸ **emit**(`event`: \"pause\"): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:74*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |

**Returns:** boolean

▸ **emit**(`event`: \"readable\"): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:75*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |

**Returns:** boolean

▸ **emit**(`event`: \"resume\"): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:76*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |

**Returns:** boolean

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[emit](#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:77*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

#### end

▸ **end**(`cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[end](#end)*

*Defined in node_modules/@types/node/stream.d.ts:262*

##### Parameters:

Name | Type |
------ | ------ |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[end](#end)*

*Defined in node_modules/@types/node/stream.d.ts:263*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| () => void |

**Returns:** void

▸ **end**(`chunk`: any, `encoding?`: BufferEncoding, `cb?`: undefined \| () => void): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[end](#end)*

*Defined in node_modules/@types/node/stream.d.ts:264*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |
`cb?` | undefined \| () => void |

**Returns:** void

___

#### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[eventNames](#eventnames)*

*Defined in node_modules/@types/node/events.d.ts:77*

**Returns:** Array\<string \| symbol>

___

#### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[getMaxListeners](#getmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:69*

**Returns:** number

___

#### isPaused

▸ **isPaused**(): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[isPaused](#ispaused)*

*Defined in node_modules/@types/node/stream.d.ts:42*

**Returns:** boolean

___

#### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[listenerCount](#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:73*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** number

___

#### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[listeners](#listeners)*

*Defined in node_modules/@types/node/events.d.ts:70*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

#### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[off](#off)*

*Defined in node_modules/@types/node/events.d.ts:66*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### on

▸ **on**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:79*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:80*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **on**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:81*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:82*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **on**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:83*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:84*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:85*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[on](#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:86*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### once

▸ **once**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:88*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:89*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **once**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:90*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:91*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **once**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:92*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:93*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:94*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[once](#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:95*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### pause

▸ **pause**(): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[pause](#pause)*

*Defined in node_modules/@types/node/stream.d.ts:40*

**Returns:** this

___

#### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[pipe](#pipe)*

*Defined in node_modules/@types/node/stream.d.ts:5*

##### Type parameters:

Name | Type |
------ | ------ |
`T` | WritableStream |

##### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined \| { end?: undefined \| false \| true  } |

**Returns:** T

___

#### prependListener

▸ **prependListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:97*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:98*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:99*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:100*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:101*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:102*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:103*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependListener](#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:104*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:106*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:107*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:108*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:109*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:110*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:111*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:112*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[prependOnceListener](#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:113*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### push

▸ **push**(`chunk`: any, `encoding?`: BufferEncoding): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[push](#push)*

*Defined in node_modules/@types/node/stream.d.ts:46*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** boolean

___

#### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[rawListeners](#rawlisteners)*

*Defined in node_modules/@types/node/events.d.ts:71*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

#### read

▸ **read**(`size?`: undefined \| number): any

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[read](#read)*

*Defined in node_modules/@types/node/stream.d.ts:38*

##### Parameters:

Name | Type |
------ | ------ |
`size?` | undefined \| number |

**Returns:** any

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeAllListeners](#removealllisteners)*

*Defined in node_modules/@types/node/events.d.ts:67*

##### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

#### removeListener

▸ **removeListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:115*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:116*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **removeListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:117*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:118*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **removeListener**(`event`: \"pause\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:119*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"pause\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:120*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"resume\", `listener`: () => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:121*

##### Parameters:

Name | Type |
------ | ------ |
`event` | \"resume\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[removeListener](#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:122*

##### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

#### resume

▸ **resume**(): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[resume](#resume)*

*Defined in node_modules/@types/node/stream.d.ts:41*

**Returns:** this

___

#### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: BufferEncoding): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[setDefaultEncoding](#setdefaultencoding)*

*Defined in node_modules/@types/node/stream.d.ts:261*

##### Parameters:

Name | Type |
------ | ------ |
`encoding` | BufferEncoding |

**Returns:** this

___

#### setEncoding

▸ **setEncoding**(`encoding`: BufferEncoding): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[setEncoding](#setencoding)*

*Defined in node_modules/@types/node/stream.d.ts:39*

##### Parameters:

Name | Type |
------ | ------ |
`encoding` | BufferEncoding |

**Returns:** this

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[setMaxListeners](#setmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:68*

##### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

#### uncork

▸ **uncork**(): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[uncork](#uncork)*

*Defined in node_modules/@types/node/stream.d.ts:266*

**Returns:** void

___

#### unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[unpipe](#unpipe)*

*Defined in node_modules/@types/node/stream.d.ts:43*

##### Parameters:

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** this

___

#### unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): void

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[unshift](#unshift)*

*Defined in node_modules/@types/node/stream.d.ts:44*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** void

___

#### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[wrap](#wrap)*

*Defined in node_modules/@types/node/stream.d.ts:45*

##### Parameters:

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** this

___

#### write

▸ **write**(`chunk`: any, `encoding?`: BufferEncoding, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[write](#write)*

*Defined in node_modules/@types/node/stream.d.ts:259*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

▸ **write**(`chunk`: any, `cb?`: undefined \| (error: Error \| null \| undefined) => void): boolean

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[write](#write)*

*Defined in node_modules/@types/node/stream.d.ts:260*

##### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined \| (error: Error \| null \| undefined) => void |

**Returns:** boolean

___

#### from

▸ `Static`**from**(`iterable`: Iterable\<any> \| AsyncIterable\<any>, `options?`: ReadableOptions): Readable

*Inherited from [Shake256Stream](#classes_sha3_shake256_shake256streammd).[from](#from)*

*Defined in node_modules/@types/node/stream.d.ts:26*

A utility method for creating Readable Streams out of iterators.

##### Parameters:

Name | Type |
------ | ------ |
`iterable` | Iterable\<any> \| AsyncIterable\<any> |
`options?` | ReadableOptions |

**Returns:** Readable


<a name="globalsmd"></a>

**[sha3-shake256](#readmemd)**

> Globals

# sha3-shake256

## Index

### Modules

* ["index"](#modules_index_md)
* ["sha3-shake256"](#modules_sha3_shake256_md)

# Modules


<a name="modules_index_md"></a>

**[sha3-shake256](#readmemd)**

> [Globals](#globalsmd) / "index"

## Module: "index"

### Index

#### References

* [Shake256Stream](#shake256stream)
* [asyncShake256](#asyncshake256)
* [shake256](#shake256)

### References

#### Shake256Stream

Re-exports: [Shake256Stream](#classes_sha3_shake256_shake256streammd)

___

#### asyncShake256

Re-exports: [asyncShake256](#asyncshake256)

___

#### shake256

Re-exports: [shake256](#shake256)


<a name="modules_sha3_shake256_md"></a>

**[sha3-shake256](#readmemd)**

> [Globals](#globalsmd) / "sha3-shake256"

## Module: "sha3-shake256"

### Index

#### Classes

* [Shake256Stream](#classes_sha3_shake256_shake256streammd)

#### Functions

* [asyncShake256](#asyncshake256)
* [shake256](#shake256)

### Functions

#### asyncShake256

▸ **asyncShake256**(`input`: Buffer, `hashLength?`: number): Promise\<Buffer>

*Defined in [src/sha3-shake256.ts:24](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L24)*

Hashes a message and returns a promise.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | message to hash |
`hashLength` | number | 32 | length of returned hash |

**Returns:** Promise\<Buffer>

promise Buffer

___

#### shake256

▸ **shake256**(`input`: Buffer, `hashLength?`: number): Buffer

*Defined in [src/sha3-shake256.ts:11](https://github.com/aellison5505/node-sha3-shake256/blob/e7c105e/src/sha3-shake256.ts#L11)*

Hashes a message and returns a buffer.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`input` | Buffer | - | message to hash |
`hashLength` | number | 32 | length of returned hash |

**Returns:** Buffer

Buffer
