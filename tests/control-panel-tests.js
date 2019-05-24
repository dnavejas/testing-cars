var expect = chai.expect;

describe("Car Controls", function () {

    let sandbox; //added
    let carsSelectElement;


    beforeEach(function () {
        // create a sandbox
        sandbox = sinon.sandbox.create();
        
        carsSelectElement = document.createElement('select');

    });

    afterEach(function () {
        sandbox.restore();
    });

    //completed add new car
    describe("Create", function () {
        it("should add a new car option to the cars select element", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            //ASSERT
            expect(carsSelectElement.childElementCount).to.equal(1);
        })
    })
    // completed turn right
    describe("Selected Car turn-right", function () {
        it("Should return the selected car with class of south", function () {
            //SETUP
            newCarAndUpdateUi(carsSelectElement)
            let selectedCar = getSelectedCar(carsSelectElement);

            //ACT
            turnRight(selectedCar);

            //ASSERT
            expect(selectedCar.className.includes('south')).to.equal(true);
            // test the return car
        })
    })
    describe("Selected Car turn-left", function () {
        it("Should return the selected car", function () {
            //SETUP
            newCarAndUpdateUi(carsSelectElement)
            let selectedCar = getSelectedCar(carsSelectElement);

            //ACT
            turnLeft(selectedCar);

            //ASSERT
            expect(selectedCar.className.includes('north')).to.equal(true);
            // test the return car
        })
    })
    describe("Selected Car move forward", function () {
        it("Should increase the selected car's left position", function () {
            //SETUP
            newCarAndUpdateUi(carsSelectElement)
            let selectedCar = getSelectedCar(carsSelectElement);

            //ACT
            forward(selectedCar);

            //ASSERT
            expect(selectedCar.style.left).to.equal("10px");
            // test the return car
        })
    })
    describe("Selected Car move reverse", function () {
        it("Should decrease the selected car's left position", function () {
            //SETUP
            newCarAndUpdateUi(carsSelectElement)
            let selectedCar = getSelectedCar(carsSelectElement);

            //ACT
            reverse(selectedCar);

            //ASSERT
            expect(selectedCar.style.left).to.equal("-10px");
            // test the return car
        })
    })
});