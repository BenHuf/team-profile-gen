const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Doug', 1, 'doug@dougmail.doug');

    expect(employee.name).toBe('Doug');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Doug', 1, 'doug@dougmail.doug');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets employee's id", () => {
    const employee = new Employee('Doug', 1, 'doug@dougmail.doug');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email", () => {
    const employee = new Employee('Doug', 1, 'doug@dougmail.doug');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('Doug', 1, 'doug@dougmail.doug');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});