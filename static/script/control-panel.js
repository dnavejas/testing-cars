// document.addEventListener('DOMContentLoaded', function(){ 
    let cars = document.querySelector("#cars");
    let btnNewCar = document.querySelector("#new-car");
    let btnTurnRight = document.querySelector("#turn-right");
    let btnTurnLeft = document.querySelector("#turn-left")
    let btnForward = document.querySelector("#forward");
    let btnReverse = document.querySelector("#reverse");

    btnNewCar.addEventListener("click", function(){
        newCarAndUpdateUi(cars);
    });

    btnTurnRight.addEventListener("click", function() {
        turnRight(getSelectedCar(cars));
    });

    btnTurnLeft.addEventListener("click", function() {
        turnLeft(getSelectedCar(cars));
    });

    btnForward.addEventListener("click", function() {
        forward(getSelectedCar(cars));
    });

    btnReverse.addEventListener("click", function() {
        reverse(getSelectedCar(cars));
    });

    function getSelectedCar(cars) {
        let car = document.querySelector("#" + cars[cars.selectedIndex].value);
        return car;
    }
    document.addEventListener("keydown", event => {
        if (event.keyCode === 39 || event.keyCode === 68) {
          turnRight(getSelectedCar());
        }
    });

    //left arrow pressed
    //turn left
    document.addEventListener("keydown", event => {
        if (event.keyCode === 37 || event.keyCode === 65) {
          turnLeft(getSelectedCar());
        }
    });

    //down arrow pressed
    //move backward
    document.addEventListener("keydown", event => {
        if (event.keyCode === 40 || event.keyCode === 83) {
          reverse(getSelectedCar());
        }
    });

    //up arrow pressed
    //move forward
    document.addEventListener("keydown", event => {
        if (event.keyCode === 38 || event.keyCode === 87) {
          forward(getSelectedCar());
        }
    });

    //N pressed
    document.addEventListener("keydown", event => {
        if (event.keyCode === 78) {
            newCarAndUpdateUi();
        }
    });

    //q pressed
    //cycle selected car
    document.addEventListener("keydown", event => {
        if (event.keyCode === 81) {
            toggleActiveCar();
        }
    });

    function toggleActiveCar(cars) {
        
        getSelectedCar().classList.toggle("selected-car");

        if((cars.options.length - 1) == cars.selectedIndex) {
            cars.selectedIndex = 0;
        }
        else {
            cars.selectedIndex = cars.selectedIndex + 1;
        }

        getSelectedCar().classList.toggle("selected-car");
    }

    function newCarAndUpdateUi(cars) {
        if(cars.selectedIndex > -1) {
            getSelectedCar(cars).classList.toggle("selected-car");
        }
        let carId = addCar();
        var opt = document.createElement('option');
        opt.value = carId;
        opt.innerHTML = carId;
        cars.appendChild(opt);

        cars.selectedIndex = cars.length - 1;

        getSelectedCar(cars).classList.toggle("selected-car");
    }
// });