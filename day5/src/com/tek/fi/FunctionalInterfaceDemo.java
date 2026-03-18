package com.tek.fi;

interface Animal {
	void eat();
	
}

class Cat implements Animal { //OOPS
	@Override
	public void eat() {
		System.out.println("animal eat inside class");
	}
}
public class FunctionalInterfaceDemo {  // FUNCTIONAL 
	public static void main1(String[] args) {
		oopWay();
		//functional();
	}
	
	private static void oopWay() {
		Animal animal = new Cat();
		animal.eat();
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Animal animal = ()->{
			System.out.println("animal eat");
		};
		animal.eat();

	}

}
