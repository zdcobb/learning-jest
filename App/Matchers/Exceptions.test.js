// You can even check if a particular function throws an error when it's called
function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
}

test('compiling Android throws no errors', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or regex
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});