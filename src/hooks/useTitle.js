import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fun Car Play`;
    }, [title])
}

export default useTitle;