// class Booking


class Booking{
     
    set BookingDate(bookingDate){
     this.BookingDate=bookingDate;
    }
    
    get BookingDate(){
        return this.BookingDate;
    }


    constructor(DoctorClinic,PaymentMethod,PaymentInfo,Patient)
    {
        var _doctor=new Doctor(name,age,gender,email,phone);
        var _DoctorClinic=new DoctorClinic(Doctor,Clinic,price);
        var _PaymentMethod=new PaymentMethod(type);
        var _PaymentInfo=new PaymentInfo(paymendate,paymentamount,isconfirmed);
        var _Patient=new Patient(name,age,gender,email,address,phone);

        
        this._DoctorClinic=DoctorClinic;
        this._PaymentMethod=PaymentMethod;
        this._PaymentInfo=PaymentInfo;
        this._Patient=Patient;
    }


    set Rank(Rank){
        this.Rank=Rank;
    }

    get Rank(){
        return this.Rank;
    }

    
    getAllBooking()
    {
        
    }

    getPatientBooking(PatientId)
    {
        
    }

    getDoctorBooking(DoctorId)
    {
        
    }

    Add(Booking)
    {

    }
    
    upate(Booking)
    {

    }
    
    Delete(Id)
    {

    }
      

}