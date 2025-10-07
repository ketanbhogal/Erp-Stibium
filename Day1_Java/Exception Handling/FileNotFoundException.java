
import java.io.*;

public class FileNotFoundException {
    public static void main(String[] args) {
        System.out.println("Helloo");

        try {
            FileReader file = new FileReader("data.txt");
        } catch (Exception e) {
            System.out.println("FileNotFoundException is Handled");
        }

        System.out.println("BYYYYYYYYYYY");
    }
}
