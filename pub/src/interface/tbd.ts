import * as pt from "pareto-core-types"

export type Sort = (
    $: {
        a: string,
        b: string,
    }
) => boolean