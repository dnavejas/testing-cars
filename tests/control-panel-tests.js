var expect = chai.expect;

describe("Car Controls", function () {

    let sandbox; //added
    let carsSelectElement;


    beforeEach(function () {
        // create a sandbox
        sandbox = sinon.sandbox.create();
        carsSelectElement = document.createElement('select')

    });

    afterEach(function () {
        sandbox.restore();
    });

    //cars
    describe("Create", function () {
        it("should add a new car option to the cars select element", function () {
            //ACT

            newCarAndUpdateUi(carsSelectElement)

            //ASSERT
            expect(carsSelectElement.childElementCount).to.equal(1);
        })
    })
    // turn-right
    describe("Selected Car turn-right", function () {
        it("Should return the selected car", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            turnRight(selectedCar)

            //ASSERT
            expect(selectedCar.className.includes('south')).to.equal(true);
            // test the return car
        })

    })
    //  // turn-right
    //  describe("Selected Car turn-right", function () {
    //     it("Should return the selected car", function () {
    //         //ACT
    //         newCarAndUpdateUi(carsSelectElement)

    //         let selectedCar = getSelectedCar(carsSelectElement)
    //         turnRight(selectedCar)

    //         //ASSERT
    //         expect(selectedCar.className.includes('south')).to.equal(true);
    //         // test the return car
    //     })

    // })
});