package DSA;

import java.util.Arrays;

public class RotateArray {

    public static void main(String[] args) {
        int[] array = {1, -2, -7, -8};
        int k = 2; 
        rotateArray(array, k);
        System.out.println(Arrays.toString(array));
    }
    static void rotateArray(int[] arr, int k) {
        int n = arr.length;
        k = k % n; 
        reverse(arr, 0, n - 1);    
        reverse(arr, 0, k - 1);    
        reverse(arr, k, n - 1);    
    }
    static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}