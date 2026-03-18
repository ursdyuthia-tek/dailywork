package lms;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

class Library {

	Map<Integer, Book> books = new HashMap<Integer, Book>();
	void add(String id, String title, float price, String author) {
		Integer id1 = Integer.valueOf(id);
		Book book = new Book(id, title, price, author);
		books.put(id1, book);
	}

	void reserve(String title) throws BookNotAvailableException {
		for (Book b : books.values()) { 
			if (b.title.equals(title) && b.getStatus() == STATUS.AVAILABLE) {
				b.setStatus(STATUS.BOOKED);
				System.out.println("Borrowed: " + title);
				return;
			}
		}
		throw new BookNotAvailableException("Book is not available.");
	}

	List<Book> find(String title) {
		List<Book> result = new ArrayList<>(); 
		for (Book book : books.values()) { 
			if (book.title.toLowerCase().contains(title.toLowerCase())) {
				result.add(book);
			}
		}
		return result;
	}

	Book remove(String id) throws Exception {
		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();

		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				iterator.remove(); 
				return book;
			}
		}

		throw new Exception("No book was available for the id: " + id);
	}

	void displayBooks() {
		System.out.println("BOOKS AVAILABLE");
		System.out.println("============================================");

		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();

		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getStatus() == STATUS.AVAILABLE)
				System.out.println(book + "\n\n");

			System.out.println("============================================");
		}
	}
}