import React from 'react';
import ContentLoader from "react-content-loader"


function LoadingBlock() {
    return (
            <ContentLoader
                speed={2}
                width={280}
                height={427}
                viewBox="0 0 280 427"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="-2" y="256" rx="6" ry="6" width="280" height="26" />
                <circle cx="130" cy="122" r="120" />
                <rect x="-4" y="288" rx="6" ry="6" width="280" height="59" />
                <rect x="2" y="361" rx="6" ry="6" width="95" height="30" />
                <rect x="124" y="354" rx="25" ry="25" width="157" height="41" />
            </ContentLoader>
        )
}

export default LoadingBlock;