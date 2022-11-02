import { Note, PrismaClient } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req
    const data = JSON.parse(body) as Note
    const prisma = new PrismaClient()

    switch (method) {
        case 'GET':
            console.log('EXECUTE GET ALL')
            res.status(200).send('')
            break
        case 'POST':
            await prisma.note.create({ data })
            res.status(201).send('')
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} not allowed!`)
    }
}
