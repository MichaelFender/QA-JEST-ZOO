test("Palindrome Checker", () => {
    word = "kayak"
    let pallyCheck = (word) => {
        return word.split("").reverse().join("")
        
    }
    expect(pallyCheck(word)).toBe(word)

})
