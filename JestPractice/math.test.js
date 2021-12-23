const operations = {
    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        return num1 - num2
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1/num2
    }
}

describe("Math Tests", () => {
    
    it("Can add", () => {
        expect(operations.add(10,2)).toBe(12)
    })

    it("Can subtract", () => {
        expect(operations.subtract(10,2)).toBe(8)
    })

    it("Can multiply", () => {
        expect(operations.multiply(10,2)).toBe(20)
    })

    it("Can divide", () => {
        expect(operations.divide(10,2)).toBe(5)
    })
})