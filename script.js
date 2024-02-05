console.log(" WELCOME TO SPOTIFY ");

let SongIndex;
let audioelement=new Audio("imagine_dragon/0.mp3");
let MasterPlay=document.getElementById('MasterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let gif1=document.getElementById('gif1');
let mastersonginfo=document.getElementById('mastersonginfo');
let songitem=Array.from(document.getElementsByClassName('songitem'));


let songs=[ {songName:"Bad Liar-Imagine Dragons",filePath:"imagine_dragon/0.mp3",coverPath:"/spotify_front_end/idragon.jpg"},

{songName:"Bones-Imagine Dragons",filePath:"imagine_dragon/1.mp3",coverPath:"/spotify_front_end/idragon.jpg"},

{songName:"Sharks-Imagine Dragons",filePath:"imagine_dragon/2.mp3",coverPath:"/spotify_front_end/idragon.jpg"},

{songName:"Thunder-Imagine Dragons",filePath:"imagine_dragon/3.mp3",coverPath:"/spotify_front_end/idragon.jpg"},
]


songitem.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    })
//audioelement.play();

// Handle Play Pause Click
MasterPlay.addEventListener('click',()=>{
   if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
   }
   else{
    audioelement.pause();
    MasterPlay.classList.remove('fa-circle-pause');
    MasterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
   }

})


//Listen to Events
audioelement.addEventListener('timeupdate',()=>{
//console.log('timeupdate')
progress=parseFloat((audioelement.currentTime/audioelement.duration)*100);
//console.log(progress);
myProgressBar.value=progress;
})


myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressBar.value*audioelement.duration)/100;
})

const MakeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        MakeAllPlays();
       SongIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioelement.src=`imagine_dragon/${SongIndex}.mp3`;
        mastersonginfo.innerText=songs[SongIndex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=3)
    SongIndex=0;
    else
    SongIndex++;
    audioelement.src=`imagine_dragon/${SongIndex}.mp3`;
    mastersonginfo.innerText=songs[SongIndex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0)
    SongIndex=3;
    else
    SongIndex--;
    audioelement.src=`imagine_dragon/${SongIndex}.mp3`;
    mastersonginfo.innerText=songs[SongIndex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
})