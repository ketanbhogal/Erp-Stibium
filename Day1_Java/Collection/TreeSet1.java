import java.util.*;
public class TreeSet1{
    public static void main(String[] args) {
        TreeSet <Integer>treeset=new TreeSet<>();
        for(int i=10;i<=100;i+=10){
            treeset.add(i);

        }
        System.out.println(treeset);

        System.out.println(treeset.first());
        System.out.println(treeset.last());
        System.out.println(treeset.floor(42));
        System.out.println(treeset.ceiling(42));
        System.out.println(treeset.pollFirst());
        System.out.println(treeset.pollLast());
        System.out.println(treeset.isEmpty());

    }
    
}
