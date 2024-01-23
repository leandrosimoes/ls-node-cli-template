#!/usr/bin/env node

import { questions, args, logging } from './src/apis/index.js'
;(async () => {
    const commandArgs = args.parseArgs(process.argv).parseSync()

    const isHappy = await questions.areYouHappy()

    await logging.showSpinner({ text: 'Starting process ...', color: 'blue' })

    if (commandArgs.debug) {
        await logging.showMessage({
            text: 'Showing a more detailed log',
            color: 'yellow',
        })
        await logging.showMessage({
            text: isHappy ? 'You are happy!' : 'You are not happy!',
            color: 'yellow',
        })
    }

    if (isHappy) {
        await logging.showMessage({
            text: "If you are happy, I'm happy too!",
            color: 'green',
            clear: true,
        })
    } else {
        await logging.showMessage({
            text: 'Sorry to hear that!',
            color: 'red',
            clear: true,
        })
    }

    await logging.showSpinner({ text: 'Finishing process...', color: 'green' })

    logging.stopSpinner()
})()
