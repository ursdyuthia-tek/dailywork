package day2;

public class PetClinic {
	public static void main(String[] args) {
		methodoverriding();
	}
	
	private static void methodOverriding() {
		Pet pet = new Dog("Huskey");
		Animal animal = (Animal)pet;
		animal.sound();
	}
	
	private static void demo1() {
		
		Dog dog = new Dog("Husky");
		dog.setName("Pluto");
		Pet dog1 = new dog("Husky");
		dog.setName("Happy");
		Cat cat = new Cat();
		dog1.bark();
		dog.bark();
		List<Pet> pets=new ArrayList<Pet>();
		pets.add(dog);
		pets.add(dog1);
		pets.add(cat);
		pets.forEach((pet)-> pet.play());
	}

}
