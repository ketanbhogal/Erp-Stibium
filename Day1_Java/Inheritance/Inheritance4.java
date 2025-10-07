class Vehicle{
    String Brand;
    String Model;

    Vehicle(String Brand,String Model){
        this.Brand=Brand;
        this.Model=Model;

    }

}

class Bike extends Vehicle{
    String Color;
    int price;

    Bike(String Color,int price,String Brand,String Model){
        super(Brand,Model);
        this.Color=Color;
        this.price=price;

    }
    public void displaybike(){
        System.out.println("Bike Color Is :"+Color+" ,Bike Price Is: "+price+" ,Bike Brand Is : "+Brand+" , Bike Model Is: "+Model);
        System.out.println();
    }
}

class Car extends Vehicle{
    String Type;
    int price;

    Car(String Type,int price,String Brand,String Model){
        super(Brand,Model);
        this.Type=Type;
        this.price=price;

    }
     public void displayCar(){
        System.out.println("Car Type  Is :"+Type+" ,Car Price Is: "+price+" ,Car Brand Is : "+Brand+" , Car Model Is: "+Model);
        System.out.println();
    }
    
}


class TwoWheelDrive extends Car{
    int mileage;
    TwoWheelDrive(int mileage,String Type,int price,String Brand,String Model){
        super(Type,price,Brand,Model);
        this.mileage=mileage;

    }

         public void displayTwoWheelCar(){
        System.out.println("Car Mileage is: "+mileage+"  ,Car Type  Is :"+Type+" ,Car Price Is: "+price+" ,Car Brand Is : "+Brand+" , Car Model Is: "+Model);
        System.out.println();
    }
}

class FourWheelDrive extends Car{
    int mileage;
    FourWheelDrive(int mileage,String Type,int price,String Brand,String Model){
        super(Type,price,Brand,Model);
        this.mileage=mileage;

    }


         public void displayFourWheelCar(){
        System.out.println("Car Mileage is: "+mileage+"  ,Car Type  Is :"+Type+" ,Car Price Is: "+price+" ,Car Brand Is : "+Brand+" , Car Model Is: "+Model);
        System.out.println();
    }
}

public class Inheritance4 {
    public static void main(String[]args){
        Bike b1=new Bike("Black",230000,"Royal Enfield","Classic 350");
        b1.displaybike();


        Car c1=new Car("Petrol",27000000,"Land Rover","Defender");
        c1.displayCar();


        FourWheelDrive f1=new FourWheelDrive(5,"Petrol",27000000,"Land Rover","Defender");
        f1.displayFourWheelCar();
    }
}
