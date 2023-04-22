// define a function that make call & log the call details
function makeCall(date, by, country) {
    console.log("Making call on " + date + " by " + by + " from " + country);
    this.calldivert
        ? console.log("Call is being diverted to " + this.calldivert)
        : console.log("Call is not being diverted");
}
// create a callAccepter obj with an acceptCall function
var callAccepter = {
    acceptCall: function () {
        console.log("CAll accepted");
    }
};
// demostrate to make a call
makeCall.call(null, "2023-03-22", "Urmil", "US");
var callData = {
    date: "2023-08-14",
    by: "Ram",
    country: "India"
};
//apply to make a call date from the callData object
makeCall.apply(null, [callData.date, callData.by, callData.country]);
// bind to create new function that makes a call and divertes it
var makeDivertedCall = makeCall.bind({ calldivert: "Radha Rani" });
makeDivertedCall("2023-08-14", "Krishna", "Vaikunth");
