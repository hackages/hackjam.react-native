import {uuid} from '../../src/models/uuid';

describe('UUID', () => {
  it('Should generate unique ids', () => {
    const id1 = uuid();
    const id2 = uuid();
    expect(id1 === id2).toBeFalsy();
  });
});
