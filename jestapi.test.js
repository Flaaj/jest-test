resetState = () => ({
    events: [
        {
            author: "Jan Kowalski",
            date: "20-03-2021",
        },
        {
            author: "Andrzej Nowak",
            date: "20-03-2021",
        },
        {
            author: "Tomasz Nowicki",
            date: "20-03-2021",
        },
    ],
});

addEventToState = (state, event) => {
    return { ...state, events: [...state.events, event] };
};

let state;

beforeAll(() => {
    state = resetState();
});

test("can find events", () => {
    expect(state.events).toBeTruthy();
    expect(state.events.length).toBeGreaterThan(0);
});

test("adding events works", () => {
    const length = state.events.length;
    const newEvent = { author: "author", date: "21-04-2021" };
    expect(addEventToState(state, newEvent).events.length).toBe(length + 1);
});

//asynchronous code
const asyncAddEvent = (event) => {
    let willAddEvent = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                state = addEventToState(state, newEvent);
                resolve();
            }, 2000);
        } catch (error) {
            reject(error);
        }
    });

    return await willAddEvent;
};


test("async adding events working", () => {
    willAddEven;
});
