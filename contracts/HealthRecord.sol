// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthRecord {
    struct Record {
        string ipfsHash; // Encrypted data location
        address creator; // Doctor/hospital address
        uint256 timestamp;
    }

    mapping(address => Record[]) private patientRecords;
    mapping(address => bool) public verifiedDoctors;

    // Add a new health record (only verified doctors)
    function addRecord(address patient, string memory ipfsHash) external {
        require(verifiedDoctors[msg.sender], "Not a verified doctor");
        patientRecords[patient].push(Record(ipfsHash, msg.sender, block.timestamp));
    }

    // Get all records for a patient
    function getRecords(address patient) external view returns (Record[] memory) {
        return patientRecords[patient];
    }
}
