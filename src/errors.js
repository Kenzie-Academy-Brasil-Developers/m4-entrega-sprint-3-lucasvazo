

export class AppError extends Error{
    constructor(message, statusCode) {
        super()
        this.message = { message }
        this.statusCode = statusCode
    }
}


export const handleErrors = (error, req, res, next) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json(error.message)
    }

    return res.status(500).json({ message : 'Internal server error.'})

}


// export { AppError, handleErrors }