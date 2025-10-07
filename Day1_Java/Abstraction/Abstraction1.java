abstract class Shape{
    public abstract float circleArea(float radius);
    public  abstract float rectangle(float len,float width);
}


public class Abstraction1 extends Shape{
        public float circleArea( float r){
        return (22/7)*r*r;
    }

    public float rectangle(float len, float width){
        return len * width;
    }
    public static void main(String[] args) {
        Shape obj =new Abstraction1();
        System.out.println("Area of Circle is: " + obj.circleArea(5));
        System.out.println("Area of Rectangle is: " + obj.rectangle(10,60));
    }
}
