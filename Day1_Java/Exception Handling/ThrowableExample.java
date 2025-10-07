public class ThrowableExample {
    public static void main(String[] args) {
        System.out.println("Hellooooooo");
        try {
            System.out.println(10 / 0);
        } catch (Throwable e) {
            System.out.println("Exception Handled");
        }try{
            int arr[]={1,2,3,4,5,6,7,8,9,0};
            for(int i=0;i<=arr.length;i++){
                System.out.println(arr[i]);
            }
        }catch(Throwable e){
            System.out.println("ArrayIndexOutOfBoundException is Handled");
            System.out.println(e);
        } finally{
            System.out.println("Code Execute Successfully");
        }
    }
}
