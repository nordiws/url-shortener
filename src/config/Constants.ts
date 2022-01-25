const { DB_USER, DB_PASSWORD, DB_NAME } = process.env

export const config = {
    API_URL: 'http://localhost:3000',
    MONGO_CONNECTION: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qhpst.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
}