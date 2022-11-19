interface ICollege {
    collegeName: string;
    address: string;
    pincode:number
} 

interface IDeparment {
    deptName: string;
    hodName: string;
    studentCount: number;
    facilityAvailable: boolean;


}

interface IcollegeDetails extends ICollege, IDeparment {
    principleName: string;
    Established: number;
    autonomous: boolean;
}

var college: IcollegeDetails = {
    collegeName: "Starwood College of Engineering",
    address: "mumbai",
    pincode:410210,
    principleName: "Dr.Anuradha Aldar",
    Established: 1950,
    autonomous: true,
    deptName: "E&TC",
    hodName: "Dr.Pradnya",
    studentCount: 500,
    facilityAvailable: true
}
