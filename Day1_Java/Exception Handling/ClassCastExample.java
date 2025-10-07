public class ClassCastExample {
    public static void main(String[] args) {
        Object obj = "Hello"; 
        try {
            Integer num = (Integer) obj; 
        } catch (ClassCastException e) {
            System.out.println("Class Cast Exception Handled");
            System.out.println(e);
        } finally {
            System.out.println("Code executed successfully");
        }
    }
}
