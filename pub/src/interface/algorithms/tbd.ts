import * as pt from "pareto-core-types"

export type FIsYinBeforeYang = (
    $: {
     readonly  "yin": string,
      readonly  "yang": string,
    }
) => boolean

export type XSortedForEach = <T>(
    $: pt.Dictionary<T>,
    $i: ($: T, key: string) => void
) => void


export type XCreateSortedForEach = (
    $d: {
        isYinBeforeYang: FIsYinBeforeYang
    }
) => XSortedForEach