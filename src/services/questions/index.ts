import confirm from '@inquirer/confirm'

export type TQuestions = {
    isHappy: boolean
}

export const start = async () => {
    const result: TQuestions = {
        isHappy: false,
    }

    result.isHappy = await confirm({
        message: 'Are you happy?',
        default: true,
    })

    return result
}

export default { start }
