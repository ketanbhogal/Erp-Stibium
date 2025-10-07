public class Polymorphism {
    Polymorphism() {
        System.out.println("Addition of 100+200 is: " + (100 + 200));
    }

    Polymorphism(int a, int b) {

        System.out.println("Addition of " + a + " + " + b + " Is :" + (a + b));

    }
    Polymorphism(int a, int b, int c){
        System.out.println("Multiplication of " + a + " * " + b + " * "+c+" Is :" + (a *b*c));
    }

    public static void main(String[] args) {
        Polymorphism obj = new Polymorphism();
        Polymorphism obj1 = new Polymorphism(300, 400);
        Polymorphism obj2 = new Polymorphism(12,3,6);
    }

}



