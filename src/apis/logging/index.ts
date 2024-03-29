import chalk from 'chalk'
import ora, { Color, Ora } from 'ora'

import { args } from '../../apis/index.js'
import { DEFAULT_DELAY_TIME } from '../../constants/index.js'
import { delay } from '../../utils/index.js'

let spinner: Ora
export const stopSpinner = () => {
    if (spinner) {
        spinner.clear()
        spinner.stop()
    }
}

export const clearConsole = async () => {
    const commandArgs = args.parseArgs(process.argv).parseSync()

    if (commandArgs.silent) return

    if (spinner) {
        stopSpinner()
    }

    process.stdout.write('\u033c')
}

export type TShowSpinnerParams = {
    color?: Color
    text?: string
    shouldClear?: boolean
    delayTime?: number
}

export const showSpinner = async (params: TShowSpinnerParams) => {
    const commandArgs = args.parseArgs(process.argv).parseSync()

    if (commandArgs.silent) {
        await clearConsole()
        return
    }

    const {
        shouldClear,
        text = 'Loading...',
        color = 'blue',
        delayTime = DEFAULT_DELAY_TIME,
    } = params

    shouldClear && (await clearConsole())

    if (!spinner) {
        spinner = ora(text).start()
        spinner.color = color
    } else {
        spinner.text = text
        spinner.color = color
        spinner.start()
    }

    await delay(delayTime)
}

export type TShowMessageParams = {
    color?: Color
    text?: string
    delayTime?: number
    clear?: boolean
}

export const showMessage = async (params: TShowMessageParams) => {
    stopSpinner()

    if (params.clear) {
        await clearConsole()
    }

    const {
        color = 'blue',
        text = 'Loading...',
        delayTime = DEFAULT_DELAY_TIME,
    } = params

    const foundColor = chalk[color] || chalk.blue

    console.log(foundColor(text))

    await delay(delayTime)
}

export default {
    clearConsole,
    showSpinner,
    stopSpinner,
    showMessage,
}
