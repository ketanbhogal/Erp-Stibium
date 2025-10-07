public class MultithreadingExample3 extends Thread {
    public void run(){
        for(int i=1;i<=3;i++){
            System.out.println(Thread.currentThread().getName()+ " Running ");
            try{
                Thread.sleep(500);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }

    public static void main(String[]args){
        MultithreadingExample3 t1=new MultithreadingExample3();
        MultithreadingExample3 t2=new MultithreadingExample3();
        
        t1.start();
        
        try{
            t1.join();

        }catch(Exception e){}

        t2.start();
    }
}
