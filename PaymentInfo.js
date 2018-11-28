class PaymentInfo
{
    constructor(paymendate,paymentamount,isconfirmed)
    {
        this.PaymenDate=paymendate;
        this.PaymentAmount=paymentamount;
        this.Isconfirmed=isconfirmed;
    }
   

    get PaymenDate(){
        return this.PaymenDate;
    }

   
    get PaymentAmount(){
        return this.PaymentAmount;
    }

    get Isconfirmed(){
        return this.Isconfirmed;
    }
}