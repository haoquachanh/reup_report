import joi from 'joi'

export const email = joi.string().pattern(new RegExp('gmail.com$')).required()
export const password = joi.string().min(6).required()
export const phone = joi.string().required();
export const address = joi.string();
export const birth = joi.string().required();
export const name = joi.string().required();



export const material = joi.string().required()
export const type = joi.string().required()
export const size = joi.string().required()
export const discount = joi.string().required()
export const title = joi.string().required()

export const price = joi.number().required()
export const available = joi.number().required()
export const category_code = joi.string().uppercase().alphanum().required()
export const image = joi.string().required()
export const bid = joi.string().required()
export const bids = joi.array().required()
export const filename = joi.array().required()
export const description = joi.string().required()
export const refreshToken = joi.string().required()