const myModule = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
};

export default myModule;