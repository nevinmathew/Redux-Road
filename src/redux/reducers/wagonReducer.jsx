import { GATHER, TIPPED_WAGON, TRAVEL } from "../actions";

const initialWagonState = {
    supplies: 100,
    distanceTravelled: 0,
    daysOnRoad: 0
}

const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
        case GATHER: {
            return {
                ...state,
                supplies: state.supplies + 15,
                daysOnRoad: state.daysOnRoad + 1
            }
        }

        case TRAVEL: {
            return {
                ...state,
                supplies: state.supplies - 20,
                distanceTravelled: state.distanceTravelled + 10,
                daysOnRoad: state.daysOnRoad + 1
            }
        }

        case TIPPED_WAGON: {
            return {
                ...state,
                supplies: state.supplies - 30,
                distanceTravelled: state.distanceTravelled,
                daysOnRoad: state.daysOnRoad
            }
        }
        default:
            return state;
    }
};

export default reducer;