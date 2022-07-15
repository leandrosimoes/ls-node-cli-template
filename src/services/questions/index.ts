import * as inquirer from 'inquirer'

export type TPlatform = {
    name: string
    checked: boolean
}

export const start = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            message: 'Are you happy?',
            name: 'isHappy',
            default: true,
        },
    ])

    return answers
}

export default { start }
