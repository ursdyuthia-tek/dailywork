package DSA;

import java.util.ArrayList;
import java.util.List;

public class StackArray {

    private List<Integer> stack = new ArrayList<>();
    void push(int x) {
        stack.add(x);
    }
    int pop() {
        if (stack.isEmpty()) {
            System.out.println("Stack underflow");
            return -1;
        }
        return stack.remove(stack.size() - 1);
    }
    int peek() {
        if (stack.isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }
        return stack.get(stack.size() - 1);
    }
    boolean isEmpty() {
        return stack.isEmpty();
    }
    public static void main(String[] args) {

        StackArray s = new StackArray();

        s.push(10);
        s.push(20);
        s.push(30);

        System.out.println("Top element: " + s.peek());  
        System.out.println("Popped: " + s.pop());        
        System.out.println("Popped: " + s.pop());        

        System.out.println("Is stack empty? " + s.isEmpty()); 
    }
}