// Check strings with toMatch() and regex!
test('there is no I in team', () => {
    expect('team').not.toMatch(/(I|i)/);
});

test('but there is a "stop" in Christoph', () => {
    expect('ChriSTOPh').toMatch(/[sS][tT][oO][pP]/);
});