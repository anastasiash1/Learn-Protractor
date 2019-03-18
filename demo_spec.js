var demoObject = require('./Pages/demo_object');
describe('Protractor Demo App', function() {
    beforeEach (async function() {
        await demoObject.get();
    })

    it('should have a history', async function() {
        await demoObject.add(1, 2);
        await demoObject.add(3, 4);

        expect(await demoObject.getLastHistoryText()).toContain('1 + 2');
        expect(await demoObject.getFirstHistoryText()).toContain('3 + 4');

        await demoObject.add(5, 6);

        expect(await demoObject.getHistoryCount()).toEqual(3);
    });
})