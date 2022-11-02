import { PrismaClient } from '@prisma/client'
import { Input } from './input'

const getNotes = async () => {
    const prisma = new PrismaClient()
    const notes = await prisma.note.findMany()

    return notes
}

export default async () => {
    const notes = await getNotes()
    return (
        <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col items-center space-y-5 w-full">
                <div className="text-2xl font-semibold">Notebook</div>
                <Input />
            </div>

            <div className="flex flex-col space-y-4 w-full">
                {notes.map((note, key) => (
                    <div
                        key={key}
                        className="bg-slate-200 bg-opacity-70 text-slate-700 w-full py-10 px-14 text-justify flex justify-center items-center rounded-lg"
                    >
                        {note.message}
                    </div>
                ))}
            </div>
        </div>
    )
}
