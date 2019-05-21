var expect = chai.expect;

describe("Driving a Car Forward", function() {

    var sandbox; //added
    let car;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();
        
        car = {};
            car.style = {};
            car.style.top = "";
            car.style.left = "";
            car.className = "";

        //mocking complex objects such as DOM
            //https://codeutopia.net/blog/2016/05/23/sinon-js-quick-tip-how-to-stubmock-complex-objects-such-as-dom-objects/

        //mocking document load
            //https://stackoverflow.com/questions/43083419/karma-mocha-how-to-test-method-that-listens-to-domcontentloaded-event/43474345
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });

    describe("calling forward while facing east", function() {
        it("should move car from right to left", function() {

            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('10px');
        });
    });

    describe("calling forward while facing west", function() {
        it("should move car from left to right", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car west";

            //ACT
            forward(car);

            //ASSERT
            expect(getDirection(car)).to.equal("WEST");
            expect(car.style.top).to.equal('0px');
            expect(car.style.left).to.equal('-10px');
        });
    });

    describe("calling forward while facing north", function() {
        it("should move car from bottom to top", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car north";

            //ACT
            forward(car);

            //ASSERT
            expect(getDirection(car)).to.equal("NORTH");
            expect(car.style.top).to.equal('-10px');
            expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling forward while facing south", function() {
        it("should move car from top to bottom", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car south";

            //ACT
            forward(car);

            //ASSERT
            expect(getDirection(car)).to.equal("SOUTH");
            expect(car.style.top).to.equal('10px');
            expect(car.style.left).to.equal('0px');
            });
    });
});

describe("Driving a Car in Reverse", function(){
    var sandbox;
    console.log(sandbox);
    let car;
    
    beforeEach(function(){
        sandbox = sinon.sandbox.create();
        car = {};
            car.style = {};
            car.style.top = "";
            car.style.left = "";
            car.className = "";
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });

    describe("calling reverse while facing east", function() {
        it("should move car from left to right", function() {

            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('-10px');
        });
    });

    describe("calling reverse while facing west", function() {
        it("should move car from right to left", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car west";

            //ACT
            reverse(car);

            //ASSERT
            expect(getDirection(car)).to.equal("WEST");
            expect(car.style.top).to.equal('0px');
            expect(car.style.left).to.equal('10px');
        });
    });

    describe("calling reverse while facing north", function() {
        it("should move car from top to bottom", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car north";

            //ACT
            reverse(car);

            //ASSERT
            expect(getDirection(car)).to.equal("NORTH");
            expect(car.style.top).to.equal('10px');
            expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling reverse while facing south", function() {
        it("should move car from bottom to top", function() {
            //SETUP
            car.style.top = "0px";
            car.style.left = "0px";
            car.className = "car south";

            //ACT
            reverse(car);

            //ASSERT
            expect(getDirection(car)).to.equal("SOUTH");
            expect(car.style.top).to.equal('-10px');
            expect(car.style.left).to.equal('0px');
            });
    })
})