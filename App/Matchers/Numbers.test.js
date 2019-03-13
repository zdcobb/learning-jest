test('Two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    // toBe and toEqual are equivalent for #'s
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

// Floating points use toBeCloseTo() instead of toEqual()
// This is because floating points are usually only "as close as possible" to the number.
// Because of the way binary math works
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // If you run this, you'll get an error because it's actually 0.3000004 or something like that
    // Thats because binary math CAN NOT achieve 0.3
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
})