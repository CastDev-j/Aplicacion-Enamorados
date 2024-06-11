// get id checkbox
// get class load-animation-play-button
// if #input-animation-loader" is checked add the class animations-play-button to ".load-animation-play-button"


document.getElementById('input-animation-loader').addEventListener('change', function () {
    if (this.checked) {
        document.querySelector('.load-animation-play-button').classList.add('animations-play-button');

        setTimeout(() => {
            document.querySelector('.animations-play-button').style.opacity = 0;

            setTimeout(() => {
                insertHeartContainers();
            }, 100);

            setTimeout(() => {
                document.querySelector('.heart-container-one').style.opacity = 0;
                setTimeout(() => {
                    document.querySelector('.heart-container-two').style.opacity = 0;
                }, 50);
                setTimeout(() => {
                    document.querySelector('.heart-container-two').style.opacity = 0;
                }, 100);
                setTimeout(() => {
                    document.querySelector('.heart-container-two').style.opacity = 0;
                }, 150);




                setTimeout(() => {
                    document.querySelector('#container').style.opacity = 0;
                    document.querySelector('#container').style.zIndex = -1;

                    // continuar con el resto de los detalles de animaciones y etc
                }, 200);
            }, 4000);

        }, 1200);


    }
});

function createHeartContainer(className) {
    const heartContainer = document.createElement('div');
    heartContainer.className = `heart-container ${className}`;
    for (let i = 1; i <= 4; i++) {
        const heart = document.createElement('img');
        heart.className = `heart heart-${i}`;
        heart.src = 'Assets/heart.png';
        heartContainer.appendChild(heart);
    }
    return heartContainer;
}

function insertHeartContainers() {
    const container = document.getElementById('container');
    setTimeout(() => {
        container.appendChild(createHeartContainer('heart-container-one'));
        setTimeout(() => {
            document.querySelector('.heart-container-one').style.opacity = 1;
        }, 600);
        setTimeout(() => {
            container.appendChild(createHeartContainer('heart-container-two'));
            setTimeout(() => {
                document.querySelector('.heart-container-two').style.opacity = 1;
            }, 600);
            setTimeout(() => {
                container.appendChild(createHeartContainer('heart-container-three'));
                setTimeout(() => {
                    document.querySelector('.heart-container-three').style.opacity = 1;
                }, 600);
                setTimeout(() => {
                    container.appendChild(createHeartContainer('heart-container-four'));
                    setTimeout(() => {
                        document.querySelector('.heart-container-four').style.opacity = 1;
                    }, 600);
                }, 450);
            }, 450);
        }, 450);
    }, 450);
}
