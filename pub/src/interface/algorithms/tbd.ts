import * as pt from "pareto-core-types"
import { TKeyValuePair } from "../types/types"

export type FIsYinBeforeYang = (
    $: {
        readonly "yin": string,
        readonly "yang": string,
    }
) => boolean

export type PSortedForEach = <T>(
    $: pt.Dictionary<T>,
    $i: ($: TKeyValuePair<T>) => void
) => void


export type FCreateSortedForEach = (
    $d: {
        isYinBeforeYang: FIsYinBeforeYang
    }
) => PSortedForEach