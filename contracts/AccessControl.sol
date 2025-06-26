contract AccessControl {
    address public admin;
    mapping(address => bool) public verifiedDoctors;

    constructor() {
        admin = msg.sender;
    }

    // DAO-style doctor verification (simplified)
    function verifyDoctor(address doctor) external {
        require(msg.sender == admin, "Only admin");
        verifiedDoctors[doctor] = true;
    }
}
