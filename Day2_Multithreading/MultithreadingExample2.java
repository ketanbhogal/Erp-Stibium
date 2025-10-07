class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - Count: " + i);

            try {
                Thread.sleep(500); 
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class MultithreadingExample2 {
    public static void main(String[] args) {
        Runnable r1 = new MyRunnable();
        Runnable r2 = new MyRunnable();

        Thread t1 = new Thread(r1, "Worker-1");
        Thread t2 = new Thread(r2, "Worker-2");

        t1.start(); 
        t2.start(); 
    }
}
