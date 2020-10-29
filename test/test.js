const { release } = require('os');
const { syncShake256, init, adsorb, finalize, squeeze } = require('../lib/index');
const relstate = require('../lib/index').release;
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
                init(this.state);
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
                relstate(this.state);
            });
            it('should release the state', () => {
                expect(this.state.length).to.be.equal(8);
            });
        });

    });
});