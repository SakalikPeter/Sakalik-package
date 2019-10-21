const assert = require("assert");
const src = require("../src/index.js");
describe("This is test!!!", function() {
    it("Okch funguje", function() {
        let t = function(){
            return "Serus";
        }
        assert.strictEqual(t(), src.a());
    });
});