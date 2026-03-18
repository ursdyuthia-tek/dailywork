package Threads;

class Counter {
	int count = 0;

	void increment() {
		// TODO Auto-generated method stub
		System.out.println(Thread.currentThread());
		count++;

	}

}
