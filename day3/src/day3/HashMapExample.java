package day3;
import java.util.*;
public class HashMapExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<Integer,String> map = new HashMap<>();
		
		map.put(1,"Java");
		map.put(2, "Python");
		map.put(3, "Go");
		map.put(3, "Go back"); //replaced the last object with the same key
		
		System.out.println(map);
		
		System.out.println(map.get(2));

	}

}
