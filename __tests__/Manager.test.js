const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Doug', 1, 'doug@dougmail.doug', 404)

    expect(manager.name).toBe('Doug');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('doug@dougmail.doug');
    expect(manager.office).toBe(404);
})

test("gets manager's office number", () => {
    const manager = new Manager('Doug', 1, 'doug@dougmail.doug', 404);

    expect(manager.getOffice()).toEqual(expect.stringContaining('404'));
})

test("gets manger's role", () => {
    const manager = new Manager('Doug', 1, 'doug@dougmail.doug', 404);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})

