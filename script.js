var scores, roundScore,activePlayer,dadu,gamePlaying;
init();

function init() {
    scores = [0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.getElementById('dadu1').style.display='none';
    document.getElementById('dadu2').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    // document.querySelector('.player-0-panel').classList.remove('winner');
    // document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('player-active');
    document.querySelector('.player-1-panel').classList.remove('player-active');

    document.querySelector('body').style.background = '#064663';
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying) {
        //make a roll random number
        var daduSatu = Math.floor(Math.random()*6);
        var daduDua = Math.floor(Math.random()*6);
        var elDaduSatu = document.getElementById('dadu1');
        var elDaduDua = document.getElementById('dadu2');
        console.log((daduSatu+1),(daduDua+1));
        // //hasil display
        elDaduSatu.style.display = 'block';
        elDaduDua.style.display = 'block';
        for(var i=1; i<=6; i++) {
            elDaduSatu.classList.remove('show-' +i);
            if (daduSatu === i) {
                elDaduSatu.classList.add('show-' +i);
            }
        }
        for (var k=1; k<=6; k++) {
            elDaduDua.classList.remove('show-' +k);
            if (daduDua === k) {
                elDaduDua.classList.add('show-' +k);
            }
        }
        setTimeout(1000);
        //update the round score
        if (daduSatu!==1&&daduDua!==1) {
            //add score
            roundScore +=(daduSatu+1)+(daduDua+1);
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
         else{
            //next player
            nextPlayer();
        }
    } else {
        alert("pelase click new game")
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        if(scores[activePlayer] >= 20){
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('player-active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('player-active');

            // document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
            // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('body').style.background = '#C24D2C';
            gamePlaying=false;
        }else{
            //switch player
            nextPlayer();
        }
    }else {
        alert("pelase click new game")
    }

});

function nextPlayer(){
    //next player
    activePlayer= activePlayer===0 ? 1 : 0;
    roundScore=0;
    document.getElementById(`current-${activePlayer}`).textContent= 0;

    document.querySelector('.player-0-panel').classList.toggle('player-active');
    document.querySelector('.player-1-panel').classList.toggle('player-active');
}

document.querySelector('.btn-new').addEventListener('click',init);
