import { Request, Response } from "express";
import shortid from 'shortid'
import { config } from "../config/Constants";
import { URL } from "../database/model/URL.model";


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

        const url = {
            originURL: "https://cloud.mongodb.com/v2/61efff45b60f5d01cbbb8b62#clusters/connect?clusterId=Cluster0",
            hash: "4pYHB-7dM",
            shortURL: "http://localhost:3000/4pYHB-7dM"
        }

        res.redirect(url.originURL)
    }
}