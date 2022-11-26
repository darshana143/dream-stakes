export interface IDotPref {
    color: string,
    defaultColor: string
}

export interface ISliderConfig {
    header: string,
    header2?: string,
    content: string,
    dotPeref: IDotPref,
    default?: boolean
}