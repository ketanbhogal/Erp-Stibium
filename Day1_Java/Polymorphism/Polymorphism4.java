class Parent{
    void show(){
        System.out.println("Parent class method");
    }

}
class Child extends Parent{
    void show(){
        System.out.println("Child class method");
    }
}


public class Polymorphism4 {
    public static void main(String[] args) {
       Parent p=new Parent();
        Child c=new Child();
        c.show();
        p.show();
    }
}
