package day4;

public class UncheckedExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		String str = null;
//		System.out.println(str.length());
		try {
			validateAge(17);
		} catch (IllegalArgumentException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		System.out.println("finished");
	}
	private static void validateAge(int age) {
		if(age < 18) {
			throw new IllegalArgumentException("Age must be 18+");
		}
		
	}

}
