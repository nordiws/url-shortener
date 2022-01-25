import { Request, Response } from "express";
import shortid from 'shortid'
import { config } from "../config/Constants";
import { URL } from "../database/model/URL.model";
import StatusCodes from 'http-status-codes'


export default class URLController {

    public main(req: Request, res: Response) {
        const info = {
            message: "URL shortener API",
            routes: {
                shortenURL: "/shorten",
                redirectByHash: "/:hash"
            }
        }
        res.json(info)
    }

    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URL.findOne({ originURL })
        console.log(url)
        if (url.originURL === originURL) {
            res.json(url)
        } else {
            const hash = shortid.generate()
            const shortURL = `${config.API_URL}/${hash}`
            const newURL = await URL.create({ originURL, hash, shortURL })
            res.json(newURL)
        }
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = await URL.findOne({ hash })

        if (url.hash === hash) {
            res.status(StatusCodes.OK).redirect(url.originURL)
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "URL not found" })
        }
    }
}