const { syncShake256 } = require('../lib/index');
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
    });
});