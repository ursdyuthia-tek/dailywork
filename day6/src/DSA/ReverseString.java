package DSA;

import java.util.Stack;

public class ReverseString {
    public static void main(String[] args) {
        String str = "hello";
        Stack<Character> stack = new Stack<>();
        for (char c : str.toCharArray()) {
            stack.push(c);
        }
        String reversed = "";
         while (!stack.isEmpty()) {
            reversed += stack.pop();
        }

        System.out.println("Reversed: " + reversed);
    }
}