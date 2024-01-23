import confirm from '@inquirer/confirm'

export async function areYouHappy(): Promise<boolean> {
    return await confirm({
        message: 'Are you happy?',
        default: true,
    })
}

export default { areYouHappy }
