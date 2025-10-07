import java.util.ArrayDeque;
import java.util.Deque;

public class Deque2 {
    public static void main(String[] args) {
        Deque deque=new ArrayDeque();
        for(int i=10;i<=100;i+=10){
            deque.add(i);
        }
        deque.addFirst(50);
        deque.addLast(100);
        System.out.println(deque);

        System.out.println(deque.getFirst());
        System.out.println(deque.getLast());
        System.out.println(deque);

        System.out.println(deque.peekFirst());
        System.out.println(deque.peekLast());
        System.out.println(deque);


        System.out.println(deque.removeFirstOccurrence(50));
        System.out.println(deque.removeLastOccurrence(100));
        System.out.println(deque);
    }
}

