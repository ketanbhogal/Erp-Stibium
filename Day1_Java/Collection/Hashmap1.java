import java.util.*;

public class Hashmap1{
    public static void main(String[] args) {
        Map map=new HashMap();
            map.put(101,"Amit"); 
            map.put(102,"Sumit");  
            map.put(103,"Meet"); 
            map.put(104,"Jeet");  
            map.put(105,"Punit");  
            map.put(106,"Vinit"); 


            System.out.println(map);

            System.out.println(map.size());

            System.out.println(map.isEmpty());

            System.out.println(map.remove(103));

            System.out.println(map);

            Map map1=new HashMap();
            map1.putAll(map);

            System.out.println(map.containsKey(101));
            System.out.println(map.containsValue("Vinit"));

            System.out.println(map.get(101));


            System.out.println(map.keySet());

            System.out.println(map.values());

            System.out.println(map.entrySet());


            map.clear();
            System.out.println(map);


        }
    }
