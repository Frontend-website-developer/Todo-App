import { useState } from "react";

export default function NewTodoForm({onCreateClicked}) {

    const [inputText, setinputText] = useState('')

    return (
        <>
            <input className="border border-gray-700 rounded px-5 py-2" type="text" value={inputText} onChange={e => setinputText(e.target.value)}/>
            <button className="bg-blue-500 border-gray-700 ml-10" onClick={() => {onCreateClicked(inputText);
                setinputText('');
            }}>
                Create To do
            </button>
        </>
    )
}