// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "blank_tilemap":
            case "blank_tilemap1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "DEV_outer_room":
            case "level2":return tiles.createTilemap(hex`0f000f0003010101010101010101010101010905100f0f0f150f1e0f0f0f020f1307060f1312110f10110f0f100f0f1107060f020f0f0f0f0f0f0f0f0f140f07060f0f0f0b04042104040e150f100706120f0f071617171718050f0f0f07060f0f14071a1b1b1b1905150f020706110f0f201a1b1b1b191f0f0f0f07060f0f0f071a1b1b1b1905150f13070613100f071a1b1b1b19050f0f0f07060f0f0f0c01011c01010d0f0f1207060f020f0f100f0f100f0f150f0f07060f10120f0f0f0f0f020f0f0f0f0706150f0f0f0f0f0f100f0f110f0f07081d1d1d1d1d1d1d1d1d1d1d1d1d0a`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterSouth0,sprites.dungeon.chestClosed,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenSouth], TileScale.Sixteen);
            case "DEV_inner_room":
            case "level3":return tiles.createTilemap(hex`070007000207040f0416010810121410100a05111010100b0a0e10101510100d050b101014100a0513101310150a0309090c090906`, img`
2 2 2 2 2 2 2 
2 . . . . . 2 
2 . . . . . 2 
2 . . . . . 2 
2 . . . . . 2 
2 . . . . . 2 
2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenNorth,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.purpleSwitchUp], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile10":return tile10;
            case "blank_tile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
