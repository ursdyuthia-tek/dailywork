package DSA;
public class ReverseArrayExample {
    public static void main(String[] args) {
        int[] arr = {5, 9, 2, 7, 1};
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println("-------");
        for(int i=0;i<arr.length; i++) {
        	System.out.println(arr[i]);
        }
    }
}



