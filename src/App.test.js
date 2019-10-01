// import { hello } from './App';

// describe('hello', ()=>{
//   it('should output hello', ()=>{
//     expect(hello()).toBe('Hello')
//   })
// })

import { suma, resta, functions } from './App'


// describe('suma', ()=>{
//   it('debería sumar', ()=>{
//     expect(suma(2,2)).toBe(4)
//   })
// })

// describe('expect one', ()=>{
//   it('true', ()=>{
//     expect(true).toBeTruthy()
//   })
// })

// describe('expect two', ()=>{
//   it('true', ()=>{
//     expect(false).toBeTruthy()
//   })
// })


// test('rest', ()=>{
//   const value=(resta(3,2))
//   expect(value).toBeTruthy()
// })


test('User should be Brad Traversy object', ()=>{
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName:'Traversy'
  })
})
