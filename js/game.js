import {State} from './classes/gameState';

WL.registerComponent('game', {
    playerObject: { type: WL.Type.Object }
}, {
    init: function() {        
        WL.onXRSessionStart.push(() => TheRoom.gameState.isInVR = true);
        WL.onXRSessionEnd.push(() => TheRoom.gameState.isInVR = false);
        WL.onXRSessionStart.push(() => {
            TheRoom.soundFxPlayer.initAudio();
            TheRoom.musicPlayer.initAudio();
        });
    },
    start: function() {
        TheRoom.gameState.state = State.Title;
    },
    update: function(dt) {
  
    },
});
