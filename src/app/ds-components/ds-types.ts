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
    back = 'back',
    showTearms = 'showTearms',
    showPrivacyPolicy = 'showPrivacyPolicy',
    submit = 'submit'
}

export interface IPopupConfigs {
    header: string,
    contentHeader: string,
    content: any,
    nxtButton: boolean,
    bckButton: boolean,
    customContents?: string,
    contentname?: string,
    customFooterButton?: string;
}