var Election = artifacts.require("./Election.sol");
var electionInstance;

contract ("Election", function(accounts)
{
    it("initializes with two candidates", function()
    {
        return Election.deployed().then(function(instance)
        {
            return instance.candidatesCount();
        }).then(function(count)
        {
            assert.equal(count, 2);
        });
    });

    it("initializes the candidates with the correct values", function()
    {
        return Election.deployed().then(function(instance)
        {
            electionInstance = instance;
            return electionInstance.candidates(1);

        }).then(function(candidate)
        {
            assert.equal(candidate[0], 1, "Contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "Contains the correct name");
            assert.equal(candidate[2], 0, "Contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate)
        {
            assert.equal(candidate[0], 2, "Contains the correct ID");
            assert.equal(candidate[1], "Candidate 2", "Contains the correct name");
            assert.equal(candidate[2], 0, "Contains the correct votes count");
        });
    });
});