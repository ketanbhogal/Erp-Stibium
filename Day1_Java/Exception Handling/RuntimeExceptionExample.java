public class RuntimeExceptionExample {
    public static void main(String[] args) {
    int a=10;
    int b=0;
    try{
        int c=a/b;

    }
    catch(RuntimeException e){
        System.out.println("Runtime Exception Handle");
        System.out.println(e);
    }
    finally{
        System.out.println("Code execute successfully");
    }
    }

}