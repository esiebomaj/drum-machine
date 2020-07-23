import React, {Component} from 'react';
// import * as sounds from  './sound3/' 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let colors=[]
  for (let index = 0; index < 10; index++) {
      colors.push(getRandomColor())
      
  }


class Drum extends Component{
    state={
        nums:[0,1,2,3,4,5,6,7,8],
        letters:['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
        color:colors,
        musicNames:['OQD-Alien-Snare.mp3',
        'OQD-Alt-Rock-Snare.mp3',
        'OQD-China-Crash.mp3',
        'OQD-Cold-Snare.mp3',
        'OQD-Dubbling-Heavy-Tom.mp3',
        'OQD-Gothic-Ride-1.mp3',
        'OQD-Gothic-Snare.mp3',
        'OQD-Hard-Rock-Crash.mp3',
        'OQD-Heavy-Tom-2.mp3',
        'OQD-Metalist-Crash.mp3',
        'OQD-Thicky-Snare.mp3'],
        volume:0.1,
        currentSong:''

    }

    playAudio(element){
        const audioElement=document.getElementById(element);
        this.setState(()=>({currentSong:this.state.musicNames[this.state.letters.indexOf(element)]}))
        audioElement.volume=this.state.volume
        audioElement.play()
    }

    pauseAudio(element){
        const audioElement=document.getElementById(element);
        this.setState(()=>({currentSong:this.state.musicNames[this.state.letters.indexOf(element)]}))
        audioElement.volume=this.state.volume
        audioElement.pause()
    }


    handleVolume(e){
        e.persist()
        this.setState(()=>({volume:e.target.value}))
    }

    render(){
        
        return (
                <div className='drum-machine'>
                    <div className='machine'>
                        <div className='display'>
                            
                            {this.state.nums.map((element) => 
                            ( <div 
                            onClick={()=>this.playAudio(this.state.letters[element])} 
                            onDoubleClick={()=>this.pauseAudio(this.state.letters[element])} 
                            style={{backgroundColor:this.state.color[Math.floor(Math.random() * 9)]}}
                            className='drum-pad'>

                                <p>{this.state.letters[element]}</p>
                                <audio vo  id={this.state.letters[element]}>
                                    <source src={'sound/'+this.state.musicNames[element]} type="audio/mpeg"></source>
                                    not compatible
                                </audio>

                            </div>)
                    )}
                        </div>
                        <div className='controls'>
                            <div className='volume-control-container'>
                                <input className='volume-control' type='range' min='0.0' max='1' step='0.05' onChange={(e)=>this.handleVolume(e)}></input>
                            </div>
                            <div className='text-container'>
                                    <p className='text'>{this.state.currentSong}</p>
                            </div>
                        </div>
                    </div>
                    <div id='footer'>
                <marquee behavior="static"  >Made with <i style={{color:'red'}} class="fa fa-heart" aria-hidden="true"></i> by JeremAIh </marquee>
                </div>
                </div>
                
            )
        
    }
}


export default Drum


// music:[
//     {letter:'Q',musicName:'OQD-Alien-Snare.mp3'},
//     {letter:'W',musicName:'OQD-Alt-Rock-Snare.mp3'},
//     {letter:'E',musicName:'OQD-China-Crash.mp3'},
//     {letter:'A',musicName:'OQD-Cold-Snare.mp3'},
//     {letter:'S',musicName:'OQD-Dubbling-Heavy-Tom.mp3'},
//     {letter:'D',musicName:'OQD-Gothic-Ride-1.mp3'},
//     {letter:'Z',musicName:'OQD-Gothic-Snare.mp3'},
//     {letter:'X',musicName:'OQD-Hard-Rock-Crash.mp3'},
//     {letter:'C',musicName:'OQD-Heavy-Tom-2.mp3'}
// ]