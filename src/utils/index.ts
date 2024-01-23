export const delay = (time = 100) => {
    let timeout: any
    return new Promise<void>((resolve) => {
        timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve()
        }, time)
    })
}
