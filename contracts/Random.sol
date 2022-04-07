pragma solidity ^0.5.0;

contract RandomNumbers {

    function returnValue() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,
            msg.sender)));
    }
}
