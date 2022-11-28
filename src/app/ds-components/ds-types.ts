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

export enum IPopupCpmmands {
    close = 'close',
    next = 'next',
    back = 'back'
}

export interface IPopupConfigs {
    header: string,
    contentHeader: string,
    content: string,
    nxtButton: boolean,
    bckButton: boolean
}