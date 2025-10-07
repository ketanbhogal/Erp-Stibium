class School{
    String sname="Ketan";
    int roll=120;
}

class Student extends School{
    String sname="Aditya";
    int roll=122; 
}
public class Polymorphism3 {
    public static void main(String[]args){
        Student s=new Student();
        School s1=new School();
        System.out.println(s.sname);
        System.out.println(s.roll);

        System.out.println(s1.sname);
    }
}
