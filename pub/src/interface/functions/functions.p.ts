import * as pt from "pareto-core-types"
import { TKeyValuePair } from "../types/types.p"

export type FIsYinBeforeYang = (
    $: {
        readonly "yin": string,
        readonly "yang": string,
    }
) => boolean

export type FSortedForEach = <T>(
    $: pt.Dictionary<T>,
    $i: ($: TKeyValuePair<T>) => void
) => void


export type FCreateSortedForEach = (
    $d: {
       readonly "isYinBeforeYang": FIsYinBeforeYang
    }
) => FSortedForEach