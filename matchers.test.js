const sum = (a, b) => a + b;

//number equal
test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toEqual(3);
});

//object equal
test("object assignment", () => {
    const data = { one: 1 };
    data["elo"] = "siema";
    expect(data).toEqual({ one: 1, elo: "siema" });
});

//number not equal
test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

//strings
test("'mak' in 'Alamakota'", () => {
    expect("Alamakota").toMatch(/[Mm]ak/);
});

test("no 'me' in 'millenium'", () => {
    expect("millenium").not.toMatch(/me/);
});

//arrays
const animalos = ["doggo", "catto", "horso", "giraffo", "crocodillo", "mario"];

test("catto and doggo in animalos", () => {
    expect(animalos).toContain("catto");
    expect(new Set(animalos)).toContain("doggo");
});

//erors and exceptions
const functionThatThrowsError = () => {
    throw new Error("Throwing an error");
};

test("function throwing an error throws an actual error", () => {
    expect(functionThatThrowsError).toThrow();
    expect(functionThatThrowsError).toThrow(Error);
    expect(functionThatThrowsError).toThrow("Throwing an error");
});

const shouldNumberBeHigherThan10 = (number) => {
    if (number > 10) return true;
    else throw new Error("Sorry, number must be higher than 10");
};
test("15 is higher than 10, 5 is less than 10 and throws Error", () => {
    expect(() => shouldNumberBeHigherThan10(15)).not.toThrow(Error);
    expect(() => shouldNumberBeHigherThan10(5)).toThrow("Sorry, number must be higher than 10");
});
