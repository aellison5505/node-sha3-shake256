const { shake256, syncShake256, asyncShake256, initState, releaseState , adsorb, finalize, squeeze, Shake256Stream } = require('../lib/index');
const { Readable, pipeline } = require('stream');
const { promisify } = require('util');
const asyncPipe = promisify(pipeline);

const expect = require('chai').expect;

describe('node-sha3-shake256', () => {
    describe('#syncShake256', () => {
        before(() => {
            this.strBuff = Buffer.from('The cat in the hat. Ate a bat!');
            this.ret = Buffer.alloc(32, 0);
            syncShake256(this.ret, this.strBuff);
        });
        it('should return buffer', () => {
            expect(this.ret.length).to.be.equal(32);
        });
        it('should return correct hash', () => {
            expect(this.ret.toString('hex')).to.be
            .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
        });
    });

    describe('#shake256', () => {
        before(() => {
            this.syncBuffer = shake256(this.strBuff);
        });
        it('should return buffer', () => {
            expect(this.syncBuffer.length).to.be.equal(32);
        });
        it('should return correct hash', () => {
            expect(this.syncBuffer.toString('hex')).to.be
            .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
        });
    });

    describe('#asyncShake256', () => {
        before(async () => {
            this.asyncRetBuffer = await asyncShake256(this.strBuff);
        });
        it('should return buffer', () => {
            expect(this.asyncRetBuffer.length).to.be.equal(32);
        });
        it('should return correct hash', () => {
            expect(this.asyncRetBuffer.toString('hex')).to.be
            .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
        });
    });

    describe('Increment Shake256', () => {
        describe('#init', () => {
            before(() => {
                this.state = Buffer.alloc(8,0);
                initState(this.state);
            });
            it('should init the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });
        describe('#adsorb', () => {
            before(() => {
                adsorb(this.state, this.strBuff.slice(0,16));
            });
            it('should update the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });
        describe('#adsorb', () => {
            before(() => {
                adsorb(this.state, this.strBuff.slice(16));
            });
            it('should update the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });
        describe('#finalize', () => {
            before(() => {
                finalize(this.state);
            });
            it('should finalize the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });
        describe('#squeeze', () => {
            before(() => {
                this.retinc = Buffer.alloc(32, 0);
                squeeze(this.retinc, this.state);
            });
            it('should return correct hash', () => {
                expect(this.ret.toString('hex')).to.be
                .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
            });
        });
        describe('#release', () => {
            before(() => {
                releaseState(this.state);
            });
            it('should release the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });

        describe('Shake256Stream', () => {
            before(async () => {
               this.writeStream =  Readable.from(this.strBuff);
                this.streamHash = new Shake256Stream(32, {
                    destroy: true
                });
                this.streamBuff = [];
                this.streamHash.on("readable", () => {
                    let data;
                    while(data = this.streamHash.read()) {
                        this.streamBuff.push(data);
                    }
                });
               
                asyncPipe(this.writeStream, this.streamHash)
                .then(() => done())
            });
            it('should return correct Hash', () => {
                expect(Buffer.concat(this.streamBuff).toString('hex')).to.be
                .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
            });
        });

    });
});