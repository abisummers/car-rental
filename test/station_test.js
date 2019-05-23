let chai = require("chai")
let chatHttp = require("chai-http")
let should = chai.should()
let expect = require('expect.js');
let server = require("../app.js")
const { ObjectId } = require('mongodb')
chai.use(chatHttp)



describe("/GET all stations", () => {
  it("returns the stations", (done) => {
    chai.request(server)
      .get("/stations")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.contain("name")
        done();
      });
  });
})


// ----------- CREATE NEW STATION -----------

describe("/POST create new station", () => {
  it("should add a new station when supplied with Paris", (done) => {
    chai.request(server)
      .post("/stations")
      .set("content-type", "application/json")
      .send({ name: "Paris" })
      .end((err, res) => {
        res.body.should.have.property("name").that.equals("Paris")
        done();
      });
  });

  it("should add a new station when supplied with Nice", (done) => {
    chai.request(server)
      .post("/stations")
      .set("content-type", "application/json")
      .send({ name: "Nice" })
      .end((err, res) => {
        res.body.should.have.property("name").that.equals("Nice")
        done();
      });
  });
  it("should add a new station when supplied with Lyon", (done) => {
    chai.request(server)
      .post("/stations")
      .set("content-type", "application/json")
      .send({ name: "Lyon" })
      .end((err, res) => {
        res.body.should.have.property("name").that.equals("Lyon")
        done();
      });
  });
})
