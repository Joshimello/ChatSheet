import { createSignal } from 'solid-js'

import './sheet.ts'
const sheetID = '1H21QOWgeLC6waUAayYlhNpoG0rqq5l0p80pQxfSKA-4'
const parser = new PublicGoogleSheetsParser(sheetID)

let res = await parser.parse()

const App = () => {
    const [text, setText] = createSignal('')
    const [name, setName] = createSignal('')

    return (
        <>
            <For each={res}>
                {(i, idx) => <div>{idx}. {i.name}: {i.text}</div>}
            </For>

            <input
                class="bg-white border-2 block"
                onInput={e => setText(e.target.value)}
            />

            <input
                class="bg-white border-2 block"
                onInput={e => setName(e.target.value)}
            />

            <button
                onClick={()=>{
                    fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfMpYd4ZQNSFkh8arPWQ-Xlkgi41-nF1H-7NYo7mHC4YMXxGg/formResponse?entry.1738192852=${name()}&entry.1029899148=${text()}`)
                    getChat()
                }}
            >send</button>
        </>
    )
}

export default App;