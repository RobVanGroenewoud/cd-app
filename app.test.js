const App = require('./app');

test('adds two numbers', () => {
    const app = new App();
    expect(app.add(1, 2)).toBe(3);
});
