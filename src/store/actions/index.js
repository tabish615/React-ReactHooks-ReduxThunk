export const increment = () => {
    return {
        type : "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type : "DECREMENT"
    }
}

export const incrementCustom = () => {
    return {
        type : "INCREMENT_CUSTOM",
        payload : 2
    }
}

export const decrementCustom = () => {
    return {
        type : "DECREMENT_CUSTOM",
        payload : 2
    }
}