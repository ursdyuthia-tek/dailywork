package lms;

import java.util.Scanner;
import java.util.logging.Logger;

public class LMSMenu {

    private static final Logger LOGGER = Logger.getLogger(LMSMenu.class.getName());

    Library library;
    Scanner sc = new Scanner(System.in);

    LMSMenu(Library library) {
        this.library = library;
    }

    void displayMenu() {
        LOGGER.info("Library Management System");
        String options = "Options:\n\t1. Add Book\n\t2. Remove Book\n\t3. Reserve Book\n\t4. Display Books\n\t0. Exit";
        LOGGER.info(options);
    }

    void start() {
        int choice;
        while (true) {
            displayMenu();
            choice = -1;
            LOGGER.info("\nEnter choice: ");
            try {
                choice = sc.nextInt();
                switch (choice) {
                case 1:
                    handleAddition();
                    break;
                case 2:
                    handleRemoval();
                    break;
                case 3:
                    handleReservation();
                    break;
                case 4:
                    library.displayBooks();
                    break;
                case 0:
                    LOGGER.info("Exiting...");
                    sc.close();
                    System.exit(0);
                    break;
                default:
                    LOGGER.info("Invalid Choice!!!");
                }
            } catch (Exception e) {
                sc.nextLine();
            }
        }
    }

    void handleAddition() throws Exception {
        String author, title, id;
        float price;

        LOGGER.info("Enter book title: ");
        title = sc.next();
        if (title.trim().equals("")) {
            throw new Exception("Invalid Book Name");
        }

        LOGGER.info("Enter book author: ");
        author = sc.next();
        if (author.trim().equals("")) {
            throw new Exception("Invalid Author Name");
        }

        LOGGER.info("Enter id: ");
        id = sc.next();

        LOGGER.info("Enter price: ");
        price = sc.nextFloat();

        library.add(id, title, price, author);
    }

    void handleReservation() throws Exception {
        LOGGER.info("Enter book name: ");
        String name = sc.nextLine();
        library.reserve(name);
    }

    void handleRemoval() throws Exception {
        LOGGER.info("Enter id: ");
        String id = sc.next();
        library.remove(id);
    }
}