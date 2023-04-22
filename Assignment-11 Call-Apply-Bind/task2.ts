interface callAccepter {
  acceptCall: () => void;
}
// define a function that make call & log the call details

function makeCall(this: any, date: string, by: string, country: string) {
  console.log(`Making call on ${date} by ${by} from ${country}`);
  this.calldivert
    ? console.log(`Call is being diverted to ${this.calldivert}`)
    : console.log("Call is not being diverted");
}

// create a callAccepter obj with an acceptCall function

const callAccepter: callAccepter = {
  acceptCall: () => {
    console.log("CAll accepted");
  },
};

// demostrate to make a call
makeCall.call(null, "2023-03-22", "Urmil", "India");

const callData = {
  date: "2023-08-14",
  by: "Ram",
  country: "India",
};

//apply to make a call date from the callData object
makeCall.apply(null, [callData.date, callData.by, callData.country]);

// bind to create new function that makes a call and divertes it
const makeDivertedCall = makeCall.bind({ calldivert: "Radha Rani" });
makeDivertedCall("2023-08-14", "Krishna", "Vaikunth");
