import java.util.PriorityQueue;

public class PriorityQueue1 {
        public static void main(String[] args) {
        PriorityQueue queue=new PriorityQueue<>(10);
        for(int i=100;i>=10;i-=10){
            queue.add(i);

        }


        System.out.println(queue);
    }
}
