pragma solidity ^0.8.7;
// import worldID from "@worldcoin/id";

// Event Check-in w/ On-Chain Notifications and Proof of Personhood
contract EventCheckIn {
    bool event_status = false; // event not started by default
    uint checked_in_guests = 0; // Start at 0
    bool uniqueuser = verifyuser(); // ?? is this valid solidity syntax??
    bytes32 eventname = "Popup Art Show";


    constructor() public view { 
        attendee = msg.sender;
        event_name = eventname;
        uint event_capacity = 50;
    }

    // event_status: true = started and false = not started
    function startevent() public {
        if (checked_in_guests >= 1) {
            event_status = true;
        }
        // uint start_time = now; // permantely store the time of contract initalization
    }

    function verifyuser() public {
        bool unique = false;
        // Call needs to be made to worldcoin_query.js file
    }

    function endevent() public {
        if (checked_in_guests >= 50) {
            return event_status = false;
        } 

    }

}