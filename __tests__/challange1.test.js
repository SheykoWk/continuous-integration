const {sum} = require('../index.js')

test("deberia regresar 8 al pasar como argumentos 6 y 2", () => {
    let a = 6;
    let b = 2;
    let result = sum(a,b);
    expect(result).toBe(8)
})