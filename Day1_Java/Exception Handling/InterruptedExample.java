public class InterruptedExample {
    public static void main(String[] args) {
        System.out.println("Helloo");

        try {
            Thread.sleep(2000); 
        } catch (InterruptedException e) {
            System.out.println(e);
            System.out.println("Interrupted Exception Handled.");
        }

        System.out.println("BYYYYYYYYYYY");
    }
}

