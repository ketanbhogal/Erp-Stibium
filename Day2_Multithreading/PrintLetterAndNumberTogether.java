class Letter extends Thread{
    public void run(){
        for(char ch='A';ch<='Z';ch++){
            System.out.println(Thread.currentThread().getName()+" Letter: "+ch);
            try{
                    Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
}
class Number extends Thread{
    public void run(){
        for(int i=1;i<=26;i++){
            System.out.println(Thread.currentThread().getName()+" Number: "+i);
            try{
                    Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
}


public class PrintLetterAndNumberTogether {
    public static void main(String[] args) {
        Number t1=new Number();
        Letter t2=new Letter();

        t1.start();
        t2.start();
    }
}
