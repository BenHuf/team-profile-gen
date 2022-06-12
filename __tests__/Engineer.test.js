const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Doug', 1, 'doug@dougmail.doug', 'doughub');

    expect(engineer.name).toBe('Doug');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('doug@dougmail.doug');
    expect(engineer.github).toBe('doughub');
    expect(engineer.role).toBe('Engineer');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Doug', 1, 'doug@dougmail.doug', 'doughub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('doughub'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Doug', 1, 'doug@dougmail.doug', 'doughub');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})