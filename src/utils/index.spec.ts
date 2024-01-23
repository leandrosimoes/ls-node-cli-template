import { delay } from './index.js'

describe('Example test', () => { 
    it('should be true', async () => {
        const startTime = Date.now();
        await delay(1000);
        expect(Date.now() - startTime).toBeGreaterThanOrEqual(1000);
    })
})