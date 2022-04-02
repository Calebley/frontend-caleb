import { useEffect, useState } from "react"

function Seed() {
    const [seed, setSeed] = useState([])

useEffect(() => {
fetch("http://localhost:2000/api/holidays/seed")
.then(response => response.json())
.then(data => setSeed(data))
}, [])

return(
        <>
        <h1>Seed</h1>
        <pre>
            {JSON.stringify(seed, null, 2)} </pre>
        </>
    )
}

export default Seed