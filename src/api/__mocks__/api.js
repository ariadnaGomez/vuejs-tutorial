export const getPosts = jest.fn(() =>
  Promise.resolve({data: [{id: 2}, {id: 3}]}))
