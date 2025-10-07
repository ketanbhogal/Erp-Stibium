class Person1 extends Thread{
    public void run(){
        System.out.println("Person1 : Hiiiiii.....");
        System.out.println("Person1 : How Are You.....");
    }
}

class Person2 extends Thread{
    public void run(){
        System.out.println("Person2 : HELLO.....");
        System.out.println("Person2 : I Am Fine.....");
    }
}
public class Communication {
    public static void main(String[]args){
        Person1 p1=new Person1();
        Person2 p2=new Person2();

        p1.start();
        p2.start();
    }    
}


