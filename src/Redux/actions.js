// action types
export const userStatus="STATUS"
export const orders="ORDERS"
// Action Creators

export const addStatus=(data)=>{
    return {
        type:userStatus,
        payload:data

    }
}

export const ALLOrders=(data)=>{
    return {
        type:orders,
        payload:data
    }
}