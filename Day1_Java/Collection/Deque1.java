import java.util.*;
public class Deque1{
    public static void main(String[] args) {
        Deque deque=new ArrayDeque();

        for(int i=20;i<=90;i+=10){
            deque.add(i);
        }
        System.out.println(deque);

        deque.addFirst(10);
        deque.addLast(100);
        System.out.println(deque);

        deque.offerFirst(0);
        System.out.println(deque);

        deque.offerLast(110);
        System.out.println(deque);

        System.out.println(deque.removeFirst());
        System.out.println(deque.removeLast());
        System.out.println(deque);

        System.out.println(deque.pollFirst());
        System.out.println(deque.pollLast());
        System.out.println(deque);



     }
}
