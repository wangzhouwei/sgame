var sharedAudioEngine = cc.audioEngine;
var sys = {
    
};

sys.setMusicVolume = function(_float){
    console.log("设置音乐音量",_float)
    sharedAudioEngine.setMusicVolume(_float);
 };
sys.getMusicVolume = function(){
    return sharedAudioEngine.getMusicVolume();
};
sys.muteAudio = function(){
    sys.setMusicVolume( 0 )
    sys.setSoundVolume( 0 )
};
sys.muteSound = function(){
    sys.setSoundVolume( 0 );
}


sys.muteMusic = function(){
    sys.setMusicVolume( 0 );
}

// sys.getSoundVolume = function(){
//     return sharedAudioEngine:getEffectsVolume()
// }


// function sys.setSoundVolume( volume )
//     sharedAudioEngine:setEffectsVolume( volume )
// end

// -- loop: bool
// function sys.playMusic( fileName, loop )
//     sys.stopMusic()
//     if loop == nil then loop = true end
//     sharedAudioEngine:playMusic( fileName, loop )
// end


// -- releaseData: bool
// function sys.stopMusic( releaseData )
//     CCLOG("sys.stopMusic")
//     if releaseData == nil then releaseData = true end
//     sharedAudioEngine:stopMusic( releaseData )
// end


// function sys.pauseMusic()
//     sharedAudioEngine:pauseMusic()
// end


// function sys.resumeMusic()
//     sharedAudioEngine:resumeMusic()
// end


// function sys.rewindMusic()
//     sharedAudioEngine:rewindMusic()
// end



// function sys.willPlayMusic()
//     return sharedAudioEngine:willPlayMusic()
// end


// function sys.isMusicPlaying()
//     return sharedAudioEngine:isMusicPlaying()
// end


// -- 返回值为 sound id
// function sys.playSound( fileName, loop )
//     -- local voice,effect = Pt_GetSoundInfoWithOutLogin()
//     -- CCLOG("音乐标识",voice,"音效标识",effect)
//     -- if effect == 0 then
//     --     return
//     -- end
//     return sharedAudioEngine:playEffect( fileName, loop or false )
// end


// function sys.pauseSound( soundID )
//     sharedAudioEngine:pauseEffect( soundID )
// end


// function sys.pauseAllSounds()
//     sharedAudioEngine:pauseAllEffects()
// end


// function sys.resumeSound( soundID )
//     sharedAudioEngine:resumeEffect( soundID )
// end


// function sys.resumeAllSounds()
//     sharedAudioEngine:resumeAllEffects()
// end


// function sys.stopSound( soundID )
//     sharedAudioEngine:stopEffect( soundID )
// end


// function sys.stopAllSounds()
//     sharedAudioEngine:stopAllEffects()
// end


// function sys.preloadSound( fileName )
//     sharedAudioEngine:preloadEffect( fileName )
// end


// function sys.unloadSound( fileName )
//     sharedAudioEngine:unloadEffect( fileName )
// end

