abstract class Vehicle {
    public abstract void showDetails(String name, String color);
}

class Bike extends Vehicle {
    public void showDetails(String name, String color) {
        System.out.println("Bike name is: " + name + "\nColor is: " + color);
    }
}

class Car extends Vehicle {
    public void showDetails(String name, String color) {
        System.out.println("Car name is: " + name + "\nColor is: " + color);
    }
}

public class Abstraction2 {
    public static void main(String[] args) {
        Vehicle obj1 = new Bike();
        obj1.showDetails("Hunter", "Black");

        Vehicle obj2 = new Car();
        obj2.showDetails("Defender", "White");
    }
}
