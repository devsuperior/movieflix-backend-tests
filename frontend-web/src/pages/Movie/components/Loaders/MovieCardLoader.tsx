import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "../../../../core/utils/list";

const MovieCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                key={item}
                speed={1}
                width={258}
                height={322}
                viewBox="0 0 250 335"
                backgroundColor="#6C6C6C"
                foregroundColor="#d6d2d2"
            >
                <rect x="0" y="40" rx="4" ry="4" width="258" height="322" />
            </ContentLoader>
            ))}
        </>
    )
}
export default MovieCardLoader