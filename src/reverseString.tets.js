const reverseString = require('./reverseString');

test('reverseString to be defined', ()=>{
  expect(reverseString).toBeDefined
})

test ('string reverses', ()=>{
  expect(reverseString('hello')).toEqual('olleh')
})
