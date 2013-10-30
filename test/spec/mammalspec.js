var request = require('request');
var url = "http://localhost:8889";

describe("tests the api", function() {
    it("should return a list of mammals", function(done) {
        request.get(url+"/mammals", function(error, response, body) {
            var checkJSON = function() {
                JSON.parse(body);
            }
            expect(checkJSON).not.toThrow();
            done();
        });
    });
    it("should return a list of mammals by a given type", function(done) {
        request.get(url+'/mammals/marsupial', function(err, response, body) {
            var mammals = JSON.parse(body);
            console.log(mammals);
            for (var i = 0; i<mammals.length; i++) {
                expect(mammals[i].type).toEqual('marsupial');
            }
            done();
        });
    });
    
    //NOTE: this is kind of a silly test, as we are adding mammals every time we run it. Ideally we should either a) delete the mammal once we've added it using a DELETE /mammals/:id (which we never built in the project) or connect to a test database rather than our actual database and insert/delete test data
    it("should save a mammal", function(done) {
        request({
            uri: url+"/mammals",
            method: 'POST',
            json: {
                "name": "TEST MAMMAL", 
                "type": "marsupial", 
                "year_extinct": 2013
            } 
        }, function(err, response, body) {
            expect(body).toContain('success');
            done();
        });
    });
});