class Vehicle{
    String Brand;
    String Model;
    double price;

}
class Bike extends Vehicle{
    String Color;
    int speed;
    public void displayBike(){
        System.out.println("Bike Brand is: "+Brand);
        System.out.println("Bike Model is: "+Model);
        System.out.println("Bike Price is: "+price);
        System.out.println("Bike Color is: "+Color);
        System.out.println("Bike Speed is: "+speed);
    }
}
class Car extends Vehicle{
    String Type;
    int Capacity;
    public void displayCar(){
        System.out.println("Car Brand is: "+Brand);
        System.out.println("Car Model is: "+Model);
        System.out.println("Car Price is: "+price);
        System.out.println("Car Type is: "+Type);
        System.out.println("Car Capacity is: "+Capacity);
    }
}

public class Inheritance1 {
    public static void main(String[] args) {
        Bike b1=new Bike();
        b1.Brand="Bajaj";
        b1.Model="Pulsar160";
        b1.price=135000;
        b1.Color="Black";
        b1.speed=160;
        b1.displayBike();

        System.out.println("****************************************************");
        Car c1=new Car();
        c1.Brand="Land Rover";
        c1.Model="Defender";
        c1.price=25000000;
        c1.Type="Petrol";
        c1.Capacity=6;
        c1.displayCar();
    }
}
