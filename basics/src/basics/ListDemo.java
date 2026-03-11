package basics;

import java.util.ArrayList;
import java.util.List;

public class ListDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		stringSurprise();
	}
	private static void manageBooks() {
		List<String> books = new ArrayList<>();
		books.add("Book1");
		books.add("Book2");
		books.add("Book3");
		System.out.println(books.size());
		books.remove(0);
		System.out.println("after remove="+books.size());
		books.forEach((book)-> System.out.println(book));

	}

}
