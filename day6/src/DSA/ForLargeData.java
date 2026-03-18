package DSA;

import java.util.Random;

public class ForLargeData {

    public static void main(String[] args) {

        // Generate large array
        int[] arr = generateArray(10_000_000); // 10 million elements

        // Find highest and second highest
        if (arr.length < 2) {
            System.out.println("No second highest");
            return;
        }

        int max = arr[0];
        int second = Integer.MIN_VALUE;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                second = max;
                max = arr[i];
            } else if (arr[i] > second && arr[i] != max) {
                second = arr[i];
            }
        }

        System.out.println(second == Integer.MIN_VALUE ? "No second highest" : "Second highest: " + second);
    }

    // Generate random array of given size
    private static int[] generateArray(int size) {
        Random rd = new Random();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = rd.nextInt(100); // Random numbers 0-99
        }
        return arr;
    }
}