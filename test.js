test( 'Pass', () => {
    console.log('Works!');
})

const calcTest = require('./calc');

describe('Agrupación sumas', () => {
    test('Sumar Positivos', () => {
        expect(calcTest.suma(1,1)).toBe(2);
        expect(typeof calcTest.suma(1,1)).toBe('number');
    })
    
    test('Sumar Negativos', () => {
        expect(calcTest.suma(-1,-1)).toBe(-2);
        expect(typeof calcTest.suma(-1,-1)).toBe('number');
    })
    
    test('Sumar a Cero', () => {
        expect(calcTest.suma(5,0)).toBe(5);
        expect(typeof calcTest.suma(5,0)).toBe('number');
    })
    
    test('Sumar con decimales', () => {
        expect(calcTest.suma(1.25, 2.75)).toBe(4);
        expect(typeof calcTest.suma(1.25, 2.75)).toBe('number');
    })
    
    test('Sumar con números y letras', () => {
        expect(calcTest.suma(4, "a")).toBe(NaN);
    })
    
    test('Sumar letras', () => {
        expect(calcTest.suma("B","T")).toBe(NaN);
    })
})

describe('Agrupación restas', () => {
    test('Restar números', () => {
        expect(calcTest.resta(2,1)).toBe(1);
    })
})

describe('Agrupación división', () =>{
    test('Dividir números', () => {
        expect(()=>calcTest.divide(2,0)).toThrow('ERROR');
    })
})

