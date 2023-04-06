input.onButtonPressed(Button.A, function () {
    basic.showString("I'm Emma!")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
basic.showString("Hello!")
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
    }
})
