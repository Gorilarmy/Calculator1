namespace SpriteKind {
    export const Protect = SpriteKind.create()
    export const Arrow = SpriteKind.create()
    export const Arrowbad = SpriteKind.create()
    export const Blast = SpriteKind.create()
    export const Morbin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Blast, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Le_go > 0) {
        if (controller.B.isPressed()) {
            Crotolamo = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . 6 6 6 5 5 6 6 6 . . . . 
                . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
                . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                . . . . 6 6 8 8 8 8 6 6 . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Protect)
            Crotolamo.setPosition(ZelLink.x, ZelLink.y - 3)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            pause(5000)
            sprites.destroy(Crotolamo, effects.bubbles, 500)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
            pause(5000)
        }
    }
})
sprites.onOverlap(SpriteKind.Morbin, SpriteKind.Projectile, function (sprite, otherSprite) {
    MorbiusHp = MorbiusHp - 1
    pause(2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Le_go > 0) {
        if (controller.B.isPressed() && Le_go > 1) {
            Cock_blast = sprites.create(img`
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . 8 8 . . 8 . 8 . . 8 8 . . . 
                . . 8 . 8 . 8 . 8 6 8 . 8 . . . 
                . . . 8 . 8 8 . 8 6 . 8 . . . . 
                8 8 8 8 6 . 8 . . . 8 . . . . . 
                8 . . . . . . . . 6 8 8 8 8 8 8 
                . 8 8 8 6 8 . . . . . . . . . 8 
                . . . . . 6 . . . 8 8 6 8 8 8 . 
                . . . . 8 . 8 . 8 . 6 . . . . . 
                . . . 8 . 8 6 . 8 8 . 8 . . . . 
                . . 8 . 8 . 6 . 8 . 8 . 8 . . . 
                . . 8 8 . . 8 . 8 . . 8 8 . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                `, SpriteKind.Blast)
            Cock_blast.changeScale(2, ScaleAnchor.Middle)
            Cock_blast.setPosition(ZelLink.x, ZelLink.y)
            if (info.life() < 3 && info.life() > 0) {
                info.changeLifeBy(1)
            }
            controller.moveSprite(ZelLink, 0, 0)
            pause(2000)
            sprites.destroy(Cock_blast, effects.coolRadial, 500)
            controller.moveSprite(ZelLink, 50, 50)
            pause(10000)
        } else {
            fium = sprites.createProjectileFromSprite(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .......22...22......
                ......2322.2222.....
                ......232222222.....
                ......222222222.....
                .......2222232......
                ........22232.......
                .........222........
                ..........2.........
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `, ZelLink, 0, -200)
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.smiles, 100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Morbin, SpriteKind.Blast, function (sprite, otherSprite) {
    MorbiusHp = MorbiusHp - 1
    pause(2000)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Blast, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite, effects.fire, 500)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    controller.moveSprite(ZelLink, 0, 0)
    tiles.setCurrentTilemap(tilemap`level9`)
    MorbiusHp = 20
    tiles.placeOnRandomTile(sprite, sprites.dungeon.doorOpenEast)
    Morbius = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f b b b b b b b b f f f f 
        f f f b 2 b b b b b 2 b b f f f 
        f f b b 2 b b b b b 2 b b b f f 
        f f b b b b b c b b b b b b f f 
        f b b b b b b b c b b b b b b f 
        b b b b b b b c b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b f f f f f f f f f f f f b b 
        b b b 1 b b b b b b b b 1 b b b 
        b b b 2 b b b b b b b b 2 b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b c b b b b c c b b b b b b 
        b b b b c b b c b b c b b b b b 
        b b b b c b b c b b c b b b b b 
        `, SpriteKind.Morbin)
    Morbius20 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f f . . . . . . . . . . . . . f 
        f f f f . . . . . . . . . f f f 
        f f f f . . . . . . . . . f f f 
        f f f f f . . . . . . . f f f f 
        f f f f f f . . . . . f f f f f 
        f f f f f f . . . . . f f f f f 
        f . f f f f . . . . . f f f . f 
        f . f f f f . . . . . f f f . f 
        . . . f . . . . . . . . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Morbin)
    Morbius20.setScale(3, ScaleAnchor.Middle)
    Morbius.setPosition(105, 90)
    Le_go = -1
})
scene.onHitWall(SpriteKind.Arrow, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
info.onScore(10, function () {
    Le_go = 0
    tiles.setCurrentTilemap(tilemap`level6`)
    ZelLink.sayText("Continue", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrowbad, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    ZelLink.sayText("Let´s give some love with \"A\"", 2000, false)
    pause(2000)
    ZelLink.sayText("And I can protect me with \"B\"", 2000, false)
    pause(2000)
    Le_go = 1
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() < 3 && info.life() > 0) {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite, effects.hearts, 100)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(2000)
})
let METEOR_SMASH: Sprite = null
let RASHO_LASHER: Sprite = null
let Miau: Sprite = null
let Morbius20: Sprite = null
let Morbius: Sprite = null
let fium: Sprite = null
let Cock_blast: Sprite = null
let MorbiusHp = 0
let Crotolamo: Sprite = null
let ZelLink: Sprite = null
let Le_go = 0
Le_go = 0
info.setScore(9)
info.setLife(3)
let Chest = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Arrowbad)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Chest, sprites.dungeon.chestOpen)
ZelLink = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . f d d 6 d 6 d d f . . . . 
    . . . . 7 d d d d d 7 . . . . . 
    . . . . . 7 d 2 d 7 . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 . 7 . 7 . . . . . . 
    . . . . . d . 7 f d f . . . . . 
    . . . . . . . 7 b f b . . . . . 
    . . . . . . . 7 . b . . . . . . 
    . . . . . . . 7 . b . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(ZelLink, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(ZelLink)
controller.moveSprite(ZelLink, 50, 50)
ZelLink.sayText("I need the chest", 2000, false)
game.onUpdateInterval(5000, function () {
    if (Le_go == 1) {
        Miau = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . 4 . 4 . . . . . . . . 
            `, SpriteKind.Enemy)
        Miau.setPosition(randint(30, 230), 30)
        Miau.follow(ZelLink, 30)
    }
})
game.onUpdateInterval(15000, function () {
    if (Le_go == 2) {
        RASHO_LASHER = sprites.create(img`
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . 3 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 3 . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . 3 3 3 3 2 2 2 2 3 3 3 . . . 
            2 . . 3 3 3 2 2 2 2 3 3 3 . . 2 
            2 2 . 3 3 3 2 2 2 2 3 3 3 . 2 2 
            . 2 . 3 3 3 2 2 2 2 3 3 3 . 2 . 
            3 . 3 3 3 2 2 2 2 2 2 3 3 3 . 3 
            3 3 3 2 2 2 2 2 2 2 2 2 2 3 3 3 
            . 3 3 2 2 2 2 2 2 2 2 2 2 3 3 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `, SpriteKind.Enemy)
        RASHO_LASHER.setScale(5, ScaleAnchor.Bottom)
        RASHO_LASHER.setPosition(Morbius.x, Morbius.y + 50)
        for (let index = 0; index < 6; index++) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Noise, 3240, 3206, 247, 247, 1198, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        }
        music.stopAllSounds()
    }
})
forever(function () {
    if (Le_go == 2 || Le_go == -1) {
        Morbius20.setPosition(Morbius.x - 3, Morbius.y - 5)
        if (MorbiusHp == 0) {
            scene.cameraFollowSprite(Morbius)
            Morbius.sayText("Shit", 5000, false)
            sprites.destroy(Morbius, effects.spray, 2000)
            game.gameOver(true)
        }
    }
})
forever(function () {
    if (Le_go == -1) {
        ZelLink.sayText("OH NO IT'S MORBIUS!!!!!!!!!", 1000, false)
        pause(1000)
        ZelLink.sayText("It's time for my final weapon....", 2000, false)
        pause(2000)
        ZelLink.sayText("THE COCK BLAST", 2000, false)
        pause(2000)
        ZelLink.sayText("I can use the cock blast by using \"A+B\"", 2000, false)
        pause(2000)
        controller.moveSprite(ZelLink, 50, 50)
        Le_go = 2
    }
})
game.onUpdateInterval(30000, function () {
    if (Le_go > 0) {
        METEOR_SMASH = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . 1 . . 1 . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . . 1 . . 5 5 1 . . . . . 
            . . . . . 1 5 5 5 5 1 . . . . . 
            . . . . . . 1 5 5 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        METEOR_SMASH.setPosition(randint(30, 230), randint(30, 230))
        METEOR_SMASH.setScale(1.25, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(200, function () {
    if (Le_go == 1) {
        fium = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 e 1 . . . . . . . 
            . . . . . 1 . e . 1 . . . . . . 
            . . . . . . 1 e 1 . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Arrow)
        fium.setPosition(randint(30, 230), 0)
        fium.setVelocity(0, 65)
    }
})
