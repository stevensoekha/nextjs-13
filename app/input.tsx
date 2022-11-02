'use client'

import { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import { Note } from '@prisma/client'

const Input = () => {
    const [value, setValue] = useState<Omit<Note, 'id'>>({ message: '' })

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((v) => ({ ...v, message: event.target.value }))
    }

    const onAddNote: KeyboardEventHandler<HTMLInputElement> = async (event) => {
        if (event.key.toLowerCase() == 'enter') {
            await fetch('/api/note', {
                method: 'POST',
                body: JSON.stringify(value),
            })
            setValue({ message: '' })
        }
    }

    return (
        <input
            className="bg-slate-200 bg-opacity-70 pl-6 pr-10 py-5 w-full rounded-lg focus:outline-none focus-within:ring-4 transition duration-150"
            type="text"
            name="add-note"
            placeholder="Add a new note"
            value={value.message}
            onChange={onChangeValue}
            onKeyDown={onAddNote}
        />
    )
}

export { Input }
