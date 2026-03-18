import java.io.*;
public class CheckedExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			FileReader file = new FileReader("data.txt");
		} catch (FileNotFoundException e) {
			// TODO: handle exception
			System.out.println("File not found");
		}

	}

}
