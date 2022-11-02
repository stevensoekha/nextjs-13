const getNotes = async () => [
    'Occaecat quis est amet in et.',
    'Ex officia fugiat deserunt magna nostrud aliqua proident mollit deserunt proident. Ex officia fugiat deserunt magna nostrud aliqua proident mollit deserunt proident. Ex officia fugiat deserunt magna nostrud aliqua proident mollit deserunt proident. Ex officia fugiat deserunt magna nostrud aliqua proident mollit deserunt proident. Ex officia fugiat deserunt magna nostrud aliqua proident mollit deserunt proident.',
    'Eiusmod mollit id esse officia pariatur elit mollit amet laborum.',
    'Pariatur ipsum laborum nisi do.',
    'Est commodo esse nostrud incididunt commodo.',
]

export default async () => {
    const notes = await getNotes()
    return (
        <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col items-center space-y-5 w-full">
                <div className="text-2xl font-semibold">Notebook</div>
                <input
                    className="bg-slate-200 bg-opacity-70 pl-6 pr-10 py-5 w-full rounded-lg focus:outline-none focus-within:ring-4 transition duration-150"
                    type="text"
                    name="add-note"
                    placeholder="Add a new note"
                />
            </div>

            <div className="flex flex-col space-y-4 w-full">
                {notes.map((note, key) => (
                    <div
                        key={key}
                        className="bg-slate-200 bg-opacity-70 text-slate-700 w-full py-10 px-14 text-justify flex justify-center items-center rounded-lg"
                    >
                        {note}
                    </div>
                ))}
            </div>
        </div>
    )
}
