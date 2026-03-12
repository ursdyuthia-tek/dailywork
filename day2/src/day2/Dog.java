package day2;

public class Dog extends Animal implements Pet {
	private String breed;
	
	public Dog(String breed) {
		this.breed = breed;
	}
	public
	public String getBreed() {
		return breed;
	}
	@override
	public void play() {
		System.out.println("playing with Dog");
	}
	
	public void bark() {
		System.out.println("Dog is barking");
	}

}
