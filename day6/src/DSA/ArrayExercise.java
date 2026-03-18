package DSA;

public class ArrayExercise {
    public static void main(String[] args) {
        int[] arr = {-1, -2, -3, -4, -5}; 
        int max = arr[0], second = Integer.MIN_VALUE;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                second = max;
                max = arr[i];
            } else if (arr[i] > second && arr[i] != max) {
                second = arr[i];
            }
        }
        System.out.println(second == Integer.MIN_VALUE ? "No second highest" : second);
    }
}