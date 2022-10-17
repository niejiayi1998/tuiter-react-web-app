import React from "react";

import ConditionalOutputInline from "./conditional-output-inline";
import ConditionalOutputIfElse from "./conditional-output-if-else";

const ConditionalOutput = () => {
    return (
        <>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </>
    )
}

export default ConditionalOutput;