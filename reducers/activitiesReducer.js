import { v4 as uuidv4 } from "uuid";
const initialState = [
    {
        id: 1,
        name: "running",
        duration: "1 hr"
    }
]

const activitiesReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "CREATE_ACTIVITY":
            return [...state, {
                id: uuidv4(),
                name: payload.name,
                duration: payload.duration
            }]
            break;
        case "DELETE_ACTIVITY":
            const copyState = [...state]
            return copyState.filter((activity) => activity.id !== payload.id)
            break;

        default:
            return state
    }
}
export default activitiesReducer;