class MyThread extends Thread{
    public void run(){
        for(int i=1;i<=5;i++){
            System.out.println(Thread.currentThread().getName()+" - Count: "+i);

            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
}

public class MultithreadExample1 {
    public static void main(String[]args){
            MyThread t1=new MyThread();
            MyThread t2=new MyThread();

            t1.setName("Thread-1");
            t2.setName("Thread-2");

            t1.start();
            t2.start();


            for(int i=1;i<=5;i++){
                System.out.println("Main Thread");
                try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }

            }    
    }
}
