const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Doug', 1, 'doug@dougmail.doug', 'Doug Tech')

    expect(intern.name).toBe('Doug');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('doug@dougmail.doug');
    expect(intern.school).toBe('Doug Tech');
})

test("gets intern's school", () => {
    const intern = new Intern('Doug', 1, 'doug@dougmail.doug', 'Doug Tech')

    expect(intern.getSchool()).toEqual(expect.stringContaining('Doug Tech'));
})

test("gets intern's role", () => {
    const intern = new Intern('Doug', 1, 'doug@dougmail.doug', 'Doug Tech')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})