import { activeTrucks, initialState } from "../../src/reducers/activeTrucks";
import { TOGGLE_TRUCK } from "../../src/actions/trucks";

const UUID = "TEST-UUID";


describe("Active trucks", () => {

  it("Should return the initial state", () => {
      const action = {
          type : "@INIT"
      };

    expect(activeTrucks(undefined, action)).toEqual(initialState);
  });


  it("Should toggle truck", () => {
    const truck: ITruck = {
      name : 'TEST',
      uuid : UUID,
    };

    const action = {
      type : TOGGLE_TRUCK,
      payload : truck
    };

    const expected = {
      [UUID] : true
    };

   expect(activeTrucks(undefined, action)).toEqual(expected);

  });

  it("Should toggle truck from non empty initial state", () => {
    const truck: ITruck = {
      name : 'TEST',
      uuid : UUID,
    };

    const action = {
      type : TOGGLE_TRUCK,
      payload : truck
    };

    const expected = {
      "123" : false,
      [UUID] : false
    };

    const initState = {
      "123" : false,
      [UUID] : true
    };

    expect(activeTrucks(initState, action)).toEqual(expected);

  });

});