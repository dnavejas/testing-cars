var expect = chai.expect;
//completed forward
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
//completed reverse
describe("Driving a Car Reverse", function(){
    var sandbox;
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
//completed adding a car
describe("Adding a Car", function() {

    var sandbox; //added
    let carCount = 0;
    // var getElsStub = sinon.stub(document.body, 'getElementById');

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();
      
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    })

    describe("Creating a car as a div element", function(){
        it("should add a new div to the document body", function(){
            //ASSERT
            expect(addCar()).to.match(/c[0-9]/);

        })
    })
})
//completed random car ID
describe("Getting a Random Car ID", function() {

    var sandbox; //added

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();
      
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    })

    describe("Creating a random number from 1 to 7 and adding it to 'car'", function(){
        it("should return 'car' and a number from 1 to 7", function(){
            //ASSERT
            expect(randomCarArtId()).to.match(/car[0-7]/);
        })
    })
})
//completed turning right
describe("Turning a Car Right", function() {

    var sandbox; //added
    let car = {};
    
    
    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();
      
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    })
    describe("Turning a car right while facing east", function(){
        it("should return car with class south", function(){
            //SETUP
            car.className = 'car east';
            car.classList = [];
            car.classList.add = function(){
                car.className = 'car south';
            };
            car.classList.toggle = function(){};
            //ACT
            turnRight(car);
            //ASSERT
            expect(getDirection(car)).to.equal('SOUTH');
        })
    })
    describe("Turning a car right while facing west", function(){
        it("should return car with class north", function(){
            //SETUP
            car.className = 'car west';
            car.classList = [];
            car.classList.add = function(){
                car.className = 'car north';
            };
            car.classList.toggle = function(){};
            //ACT
            turnRight(car);
            //ASSERT
            expect(getDirection(car)).to.equal('NORTH');
        })
    })
    describe("Turning a car right while facing north", function(){
        it("should return car with class east", function(){
            //SETUP
            car.className = 'car north';
            car.classList = [];
            car.classList.add = function(){
                car.className = 'car east';
            };
            car.classList.toggle = function(){};
            //ACT
            turnRight(car);
            //ASSERT
            expect(getDirection(car)).to.equal('EAST');
        })
    })
    describe("Turning a car right while facing south", function(){
        it("should return car with class west", function(){
            //SETUP
            car.className = 'car south';
            car.classList = [];
            car.classList.add = function(){
                car.className = 'car west';
            };
            car.classList.toggle = function(){};
            //ACT
            turnRight(car);
            //ASSERT
            expect(getDirection(car)).to.equal('WEST');
        })
    })
})

describe("Turning a Car Left", function() {
    var sandbox; //added
    let NORTH = 'NORTH';
    let SOUTH = 'SOUTH';
    let EAST = 'EAST';
    let WEST = 'WEST';
    let LEFT = 'LEFT';

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();
      
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    })
    describe("Turning a car left while facing north", function(){
        it("should return car with class west", function(){
            //ASSERT
            expect(randomCarArtId()).to.match(/car[0-7]/);
        })
    })
    describe("Turning a car left while facing south", function(){
        it("should return car with class east", function(){
            //ASSERT
            expect(randomCarArtId()).to.match(/car[0-7]/);
        })
    })
    describe("Turning a car left while facing east", function(){
        it("should return car with class north", function(){
            //ASSERT
            expect(randomCarArtId()).to.match(/car[0-7]/);
        })
    })
    describe("Turning a car left while facing west", function(){
        it("should return car with class south", function(){
            //ASSERT
            expect(randomCarArtId()).to.match(/car[0-7]/);
        })
    })
})
//completed getting direction
describe("Getting Direction of a Car", function(){
    var sandbox;
    let car = {};
    let classes = car.className;
    let direction = "";

    let NORTH = 'NORTH';
    let SOUTH = 'SOUTH';
    let EAST = 'EAST';
    let WEST = 'WEST';

    beforeEach(function() {
        // create a sandbox
        sandbox = sinon.sandbox.create();
        
      });
  
    afterEach(function() {
        // restore the environment as it was before
        sandbox.restore();
    })
    
    describe("Checking class of car object for 'North'", function(){
        it("should return an object equal to 'NORTH'", function(){
            //SETUP
            car.className = "car north";
            //ACT
            getDirection(car);
            //ASSERT
            expect(getDirection(car)).to.equal(NORTH);

        })
    })
    describe("Checking class of car object for 'East'", function(){
        it("should return an object equal to 'EAST'", function(){
            //SETUP
            car.className = "car east";
            //ACT
            getDirection(car);
            //ASSERT
            expect(getDirection(car)).to.equal(EAST);

        })
    })
    describe("Checking class of car object for 'South'", function(){
        it("should return an object equal to 'South'", function(){
            //SETUP
            car.className = "car south";
            //ACT
            getDirection(car);
            //ASSERT
            expect(getDirection(car)).to.equal(SOUTH);

        })
    })
    describe("Checking class of car object for 'West'", function(){
        it("should return an object equal to 'WEST'", function(){
            //SETUP
            car.className = "car west";
            //ACT
            getDirection(car);
            //ASSERT
            expect(getDirection(car)).to.equal(WEST);

        })
    })
})