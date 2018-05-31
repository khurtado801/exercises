const expect = require('expect');
const utils = require('./utils');

// Create new case using the mocha function it
it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number')
});


it('Should square a number', () => {
    let res = utils.square(3);

    expect(res).toBe(9).toBeA('number')
});

// it('Should expect some values...', () => {
//     expect(12).toNotBe(12);
//     expect({name: 'ken'}).toNotEqual({name: 'Ken'});
//     expect([2,3,4]).toExclude(9);
//     expect({name: 'Ken'}).toExclude({name: 'Ken'});
//     expect({
//         name: 'Ken',
//         age: 30,
//         location: 'Utah'
//     }).toExclude({
//         age: 42
//     })
// })

it('Should set firstName and lastName', () => {
    let user = {location: 'Utah', age: 42};
    let res = utils.setName(user, 'Ken Hurtado');

    expect(res).toInclude({
        firstName: 'Ken',
        lastName: 'Hurtado'
    });
}); 
