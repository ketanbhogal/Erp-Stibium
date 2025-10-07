public class ThrowsExample {
   
    public static void main(String[] args)throws Exception {
        m1();
    }
    public static void m1()throws InterruptedException{
        for(int i=0;i<=5;i++){
            System.out.print(i+" ");
            Thread.sleep(500);
        }

    }
}

