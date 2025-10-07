class Calculator{
   public static int add(int a, int b){
        return a+b;
    }
    public static int add(int a, int b, int c){
        return a+b+c;
    }
        public static float add(float a, float b, float c){
        return a+b+c;
    }
    public static double add(double a, double b){
        return a+b;
    }
    
}


class Polymorphism2{
    public static void main(String[]args){
        Calculator c=new Calculator();
        c.add(100,250);
        c.add(12.5,17.2);
        c.add(10,20,30); 
    }
}


