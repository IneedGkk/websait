let enterButton = document.getElementById('enterButton');
enterButton.addEventListener('click', function handleEnterButtonClick() {
    // Remove the click event listener to prevent it from being triggered again
    enterButton.removeEventListener('click', handleEnterButtonClick);
    // Prevent the enterButton from receiving pointer events
    enterButton.style.pointerEvents = 'none';

    // Hide the button and start the transition
    this.style.animation = 'fadeout 1s forwards';
    setTimeout(() => {
        // After the transition, show the message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';
        welcomeMessage.innerHTML = 'Please, come in my little nigger >_<..';
        welcomeMessage.style.color = 'white'; // Set the text color to black
        welcomeMessage.style.opacity = '1';
        var blackOverlay = document.getElementById('blackOverlay');
        blackOverlay.style.opacity = '1';
        blackOverlay.style.backgroundColor = 'black'; // Change the background color to white
        setTimeout(() => {
            // After showing the message, hide it and start the transition again
            welcomeMessage.style.opacity = '0';
            blackOverlay.style.opacity = '0';
            setTimeout(() => {
                welcomeMessage.style.display = 'none';
                document.getElementById('overlay').style.display = 'block';
                document.getElementById('discordImage').style.opacity = '1';
                document.getElementById('enterButton').style.animation = 'fadeout 1s forwards';
                document.getElementById('backgroundVideo').play();
                setTimeout(() => {
                    // After the transition, start the video
                    blackOverlay.style.display = 'none';
                    document.getElementById('backgroundVideo').style.display = 'block';
                }, 1000); // transition to video
            }, 0); // message display duration
        }, 2000); // message delay
    }, 1000); // initial transition
});
