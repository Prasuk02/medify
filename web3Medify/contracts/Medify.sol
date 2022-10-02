//SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

library computation
{
    function compareStrings(string memory _string) internal pure returns(bytes32)
    {
        bytes32 hashedStr = keccak256(abi.encode(_string));
        return hashedStr;
    }
}

contract medify {

/************************************************ VARIABLES *****************************************/
    //DRA - Drug Regulatory Authority
    address immutable public DRA;
    uint public orderID = 0;
    uint public amountOrdered;

/************************************************* STRUCTS ******************************************/
    struct Supplier {
        string Sname;
        string Slocation;
        address S_address;
    }

    struct Manufacturer {
        string Mname;
        string Mlocation;
        address M_address;
        bytes32 M_secretId;
    }

    struct FDA {
        address FDA_Id;
    }

    struct GOVT {
        address GOVT_Id;
    }

    struct Distributor {
        string Dname;
        string Dlocation;
        address D_address;
    }

    struct Hospitals {
        string Hname;
        string Hlocation;
    }

    struct Pharmacys {
        string Pname;
        string Plocation;
    }

    struct Transporter {
        string Tname;
        string Tlocation;
    }

    struct orderedMedicine
    {
        uint Id; 
        string name;
        string description;
        uint amount;
        
    }

    struct rawSupplyOrders {
        uint suppliedM_id;
        string[] supplied_chemicals;
        uint supplied_Amt;
    }

    struct Medicines {
        bytes32 secret_id;            //assigned by DRA at time of adding manufacturer //use ripemd160 hashing algorithm
        uint medicine_Id;
        string medicine_Name;
        string medicine_Brand;
        string medicine_Discription;
        string mfrDate;
        string expData;
        uint mrp;
    }

    struct distributeMedicine {
        uint m_id; 
        string m_name; 
        string _description;
        uint _amtDist;
    }

/************************************************** ENUM ********************************************/
    enum medicineCurrentStage 
    {
        ordered,
        rawMaterial_Supplied,
        manufactured,
        verified,
        rejected,
        distributed,
        retailing,
        sold
    }

    enum verificationCertificate 
    {
        rejected, 
        approved
    }

/************************************************** ARRAYS ******************************************/
    uint[] public batchMedicineIdsApproved_forDistribution;
    Manufacturer[] public manufacturersList;
    Supplier[] public suppliersList;
    Distributor[] public distributorsList;
    Hospitals[] public hospitalsList;
    Pharmacys[] public pharmacysList;

/************************************************ MAPPING *******************************************/
    mapping(address => string) isMfr;
    mapping(address => string) isSupplier;
    mapping(address => string) isdtr;
    mapping(uint => orderedMedicine) public ordersList;
    mapping(uint => medicineCurrentStage) public ordersStatusList;
    mapping(uint => uint) public orderedAmtList;
    mapping(uint => uint) public suppliedLeftAmtList;
    mapping(uint => uint) public manufacturedLeftAmtList;
    mapping(uint => uint) public distributedLeftAmtList;
    mapping(uint => uint) public soldLeftAmtList;
    mapping(uint => rawSupplyOrders) public raw_materialSuppliesList;
    mapping(uint => Medicines) medicineDetails;
    mapping(bytes32 => address) serectIDsList;
    mapping(uint => verificationCertificate) public FDA_certificateStatusList;
    mapping(uint => verificationCertificate) public GOVT_certificateStatusList;

/************************************************ MODIFIER ******************************************/
    modifier onlyDRA {
        require(msg.sender == DRA, "Only DRA is allowed to add Suppliers, Manufacturers and Distributors");
        _;
    }

    modifier onlymfr {
        require(computation.compareStrings(isMfr[msg.sender]) == computation.compareStrings("Manufacturer"), "Only Manufacturer is allowed to manufacture new medicine");
        _;
    }

    modifier onlySup {
        require(computation.compareStrings(isSupplier[msg.sender]) == computation.compareStrings("Supplier"), "Only selected suppliers are allowed to dispatch raw materials to manufacturer");
        _;
    }

    modifier onlyDistibutor {
        require(computation.compareStrings(isdtr[msg.sender]) == computation.compareStrings("Distributor"), "Only selected suppliers are allowed to dispatch raw materials to manufacturer");
        _;
    }

/*********************************************** CONSTRUCTOR ****************************************/
    constructor()
    {
        DRA = msg.sender;
    }

/************************** FUNCTIONS FOR ADDING VALID ENTITIES IN BLOCKCHAIN ***********************/
    function addManufacturer(string memory _name, string memory _location, address _accAddress, bytes32 M_secretId) public onlyDRA returns(string memory)
    {
        require(serectIDsList[M_secretId] == address(0), "This secret ID is already assigned to someone");
        Manufacturer memory newManufacturer = Manufacturer(_name, _location, _accAddress, M_secretId);
        manufacturersList.push(newManufacturer);
        isMfr[_accAddress] = "Manufacturer";
        serectIDsList[M_secretId] = _accAddress;
        return ("Manufacturer Successfully added.");
    }

    function addSupplier(string memory _name, string memory _location, address _accAddress) public onlyDRA returns(string memory)
    {
        Supplier memory newSupplier = Supplier(_name, _location, _accAddress);
        suppliersList.push(newSupplier);
        isSupplier[_accAddress] = "Supplier";
        return ("Supplier Successfully added.");
    }

    function addDistributor(string memory _name, string memory _location, address _accAddress) public onlyDRA returns(string memory)
    {
        Distributor memory newDistributor = Distributor(_name, _location, _accAddress);
        distributorsList.push(newDistributor);
        isdtr[_accAddress] = "Distributor";
        return ("Distributor Successfully added.");
    }

/***************** FUNCTIONS FOR PERFORMING PARTICULAR FUNCTIONS OF EACH RESP. ENTITY ***************/
    function order_Medicine(string memory ordered_m, string memory desp_m, uint _amt) public onlyDRA returns(string memory)
    {
        orderID++;
        amountOrdered = _amt;
        orderedMedicine memory newOrder = orderedMedicine( orderID, ordered_m, desp_m, amountOrdered);
        ordersList[orderID] = newOrder;
        ordersStatusList[orderID] = medicineCurrentStage.ordered;
        orderedAmtList[orderID] = _amt;
        suppliedLeftAmtList[orderID] = _amt;
        manufacturedLeftAmtList[orderID] = _amt;
        distributedLeftAmtList[orderID] = _amt;
        soldLeftAmtList[orderID] = _amt;
        return "Medicine batch ordered Successfully";
    }

    function supplyRawMaterial(uint m_id, string[] memory _chemicals, uint _forHowMuchAmt) public onlySup returns(string memory)
    {
        require(ordersStatusList[m_id] == medicineCurrentStage.ordered, "This medicine is till yet not ordered or already supplied raw material for this ID");
        require(suppliedLeftAmtList[m_id] >= _forHowMuchAmt, "Huge amount of raw material supply is not possible");
        rawSupplyOrders memory newSupply = rawSupplyOrders(m_id, _chemicals, _forHowMuchAmt);
        raw_materialSuppliesList[m_id] = newSupply;
        suppliedLeftAmtList[m_id] -= _forHowMuchAmt;
        ordersStatusList[m_id] = medicineCurrentStage.rawMaterial_Supplied;
        return "Raw material supplied successfully";
    }
    
    function mgfMedicine(bytes32 secret_id, uint medicine_Id, string memory medicine_Name, string memory medicine_Brand, string memory medicine_Discription, string memory _mfrDate, string memory _expDate, uint _mrp, uint amountOfMed) public onlymfr returns(string memory)
    {
        require(ordersStatusList[medicine_Id] == medicineCurrentStage.rawMaterial_Supplied, "Raw material for this medicine is till yet not arrived");
        require(manufacturedLeftAmtList[medicine_Id] >= amountOfMed, "Huge amount of manufacturing is not possible");
        Medicines memory newMedicine = Medicines(secret_id, medicine_Id, medicine_Name, medicine_Brand, medicine_Discription, _mfrDate, _expDate, _mrp);
        medicineDetails[medicine_Id] = newMedicine;
        manufacturedLeftAmtList[medicine_Id] -= amountOfMed;
        ordersStatusList[medicine_Id] = medicineCurrentStage.manufactured;
        return ("Medicine Successfully Manufactured.");
    }

    function FDA_verification(uint m_id, string memory _rejected_approved) public returns(string memory)
    {
        require(ordersStatusList[m_id] == medicineCurrentStage.manufactured, "Medicine cannnot be verified, as meddicine is till yet not manufactured");
        if (computation.compareStrings(_rejected_approved) == computation.compareStrings("approved"))
        {
            FDA_certificateStatusList[m_id] = verificationCertificate.approved;
            ordersStatusList[m_id] = medicineCurrentStage.verified;
        }
        else if(computation.compareStrings(_rejected_approved) == computation.compareStrings("rejected"))
        {
            FDA_certificateStatusList[m_id] = verificationCertificate.rejected;
            ordersStatusList[m_id] = medicineCurrentStage.rejected;
        }
        else
        {
            revert("Invalid verifcation choose b/w {rejected or approved}");
        }
        return "Medicine is successfully verified by FDA";
    }

    function GOVT_verification(uint m_id, string memory _rejected_approved) public returns(string memory)
    {
        require(ordersStatusList[m_id] == medicineCurrentStage.manufactured, "Medicine cannnot be verified, as meddicine is till yet not manufactured");
        if (computation.compareStrings(_rejected_approved) == computation.compareStrings("approved"))
        {
            GOVT_certificateStatusList[m_id] = verificationCertificate.approved;
            ordersStatusList[m_id] = medicineCurrentStage.verified;
        }
        else if(computation.compareStrings(_rejected_approved) == computation.compareStrings("rejected"))
        {
            GOVT_certificateStatusList[m_id] = verificationCertificate.rejected;
            ordersStatusList[m_id] = medicineCurrentStage.rejected;
        }
        else
        {
            revert("Invalid verifcation choose b/w {rejected or approved}");
        }
        return "Medicine is successfully verified by GOVT";
    }

    function distributeMedicines(uint m_id, string memory m_name, string memory _description, uint _amtDist) public onlyDistibutor returns(string memory)
    {
        require(FDA_certificateStatusList[m_id] == verificationCertificate.approved, "This medicine cannot be distributed, \"REJECTED BY FDA\"");
        require(GOVT_certificateStatusList[m_id] == verificationCertificate.approved, "This medicine cannot be distributed, \"REJECTED BY GOVT\"");
        require(ordersStatusList[m_id] == medicineCurrentStage.verified, "This medicine got rejected, cannot be distributed");
        require(distributedLeftAmtList[m_id] >= _amtDist, "Huge amount of distribution is not possible");
        
        distributedLeftAmtList[m_id] -= _amtDist;
        ordersStatusList[m_id] == medicineCurrentStage.distributed;
        return "Distributed medicines successfully";
    }
}

//check secret id not working
//Due to public address of Govt and FDA no one will know who is verifying the medicine [reduce bribing]
//remove illegal retail shops as everyone has own secret id, which can be verified by medify app
//packets manufactured -- small amount so that code of medicine keeps on changing
//storing hash in qr code and decrypting qr code with hash no one can deprypt hash
//authentication in blockchain removes central authority and server down problem.