export const add = (sinhVien) => {
    return {
        type: "ADD",
        payload: sinhVien
    }
}
export const remove = (id) => {
    return {
        type: "REMOVE",
        payload: id
    }
}
export const update = (sinhVien) => {
    return {
        type: "UPDATE",
        payload: sinhVien
    }
}