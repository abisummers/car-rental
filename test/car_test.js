let chai = require("chai")
let chatHttp = require("chai-http")
let should = chai.should()
let server = require("../app.js")

chai.use(chatHttp)


describe("/GET all cars", () => {
  it("returns the cars", (done) => {
    chai.request(server)
      .get("/cars")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.contain("name")
        done();
      });
  });
})

