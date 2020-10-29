const { syncShake256, initState, releaseState , adsorb, finalize, squeeze, Sha3Shake256Stream } = require('../lib/index');
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
              //  console.log(this.retinc.toString('hex'));
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

        describe('Shake256 Stream', () => {
            before(async () => {
               this.writeStream =  Readable.from(this.strBuff);
                this.streamHash = new Sha3Shake256Stream();
                this.streamBuff = [];
                this.streamHash.on("readable", () => {
                    let data;
                    while(data = this.streamHash.read()) {
                        this.streamBuff.push(data);
                    }
                });
                await asyncPipe(this.writeStream, this.streamHash);
            });
            it('should return correct Hash', () => {
                expect(Buffer.concat(this.streamBuff).toString('hex')).to.be
                .equal("51bdaccf2d521b71a0c548eea62033ece1b0e720ae7b904bb640a8199b36ed84");
            });
        });

    });
});