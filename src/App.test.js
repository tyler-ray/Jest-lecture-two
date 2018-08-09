const fns = require ('./UTLS/functions')

describe('Tests for App.js',()=>{
    describe('Tests for getPerson',()=>{

        test('getPerson returns data',()=>{
            expect(fns.getPerson()).toBeDefined()
        })
        test('getPerson should return Luke Skywalker',()=>{
            expect.assertions(1)
        return fns.getPerson().then(res=>{
            expect(res.name).toBe("Luke Skywalker")
        })
    })
    test('getPerson should return Luke Skywalker',async ()=>{
        expect.assertions(1)
        const data = await fns.getPerson()
        expect(data.name).toBe("Luke Skywalker")
        
    })
})
    describe('Tests for getStarship',()=>{
        test('should return data',()=>{
            expect.assertions(1)
            return fns.getStarship().then((data)=>{
                expect(data).toBeDefined()})
        })
        test('Should return an object',()=>{
            expect.assertions(1)
            return fns.getStarship().then((res)=>{
                return expect(typeof res).toBe('object')
            })
        })
        test('should return an object with property of name',()=>{
            expect.assertions(1)
            return fns.getStarship().then((res)=>{
                return expect(res.hasOwnProperty('name')).toBe(true);
            })
        })
        test.only('should return an object name Death Star', ()=>{
            expect.assertions(1)
            return fns.getStarship().then((res)=>{
             return expect(res.name).toBe('Death Star');
            })
        })
    })
    
})