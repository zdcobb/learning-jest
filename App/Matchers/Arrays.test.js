// Check arrays for a specific/matching element(s)
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('The shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});