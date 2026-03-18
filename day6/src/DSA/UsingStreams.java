package DSA;

import java.util.Arrays;
import java.util.Comparator;

public class UsingStreams {
    public static void main(String[] args) {

        int[] arr = {-7, -2, -0, 19, -5};
        int[] sortedUnique = Arrays.stream(arr).boxed()                
                                   .distinct()              
                                   .sorted(Comparator.reverseOrder()) 
                                   .mapToInt(Integer::intValue)
                                   .toArray();

        if (sortedUnique.length < 2) {
            System.out.println("No second highest");
        } else {
            System.out.println("Second highest: " + sortedUnique[1]);
        }
    }
}