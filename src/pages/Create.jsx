import urlcat from "urlcat"
import { useEffect } from "react"
const BACKEND = process.env.REACT_APP_BACKEND
const url = urlcat(BACKEND, "/api/holidays")



    function Create() {
        useEffect(() => {
            fetch(url, { method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: "myBirthday"})
        })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }, [])
    return (
        <>
        Create
        </>
    )
}

export default Create