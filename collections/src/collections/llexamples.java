package collections;
import java.util.*;


public class llexamples {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<String> cities = createListofCities();
		System.out.println(cities.contains("Delhi"));
	}
	
	private static void defensiveDowncasting(List<String> cities) {
		if(cities instanceof LinkedList<String>) {
			LinkedList<String> linkedList = ((LinkedList) cities);
			linkedList .addFirst("Chennai");
		}
	}
	
	private static List<String> createListofCities() {
		List<String> cities = new ArrayList<>();
	
		
		cities.add("Delhi");
		cities.add("Mumbai");
		cities.add("Banglore")
		
		System.out.println(cities);
	}

}
