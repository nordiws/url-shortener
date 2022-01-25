import { Schema, model } from 'mongoose'

const urlSchema = new Schema({
    originURL: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    }
})

export const URL = model('url-shortener', urlSchema)