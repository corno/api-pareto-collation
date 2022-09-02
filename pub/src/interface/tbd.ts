import * as pt from "pareto-core-types"

export type IsABeforeB = (
    $: {
        a: string,
        b: string,
    }
) => boolean