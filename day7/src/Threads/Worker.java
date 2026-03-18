package Threads;

public class Worker extends Thread {
	Counter counter;
	public Worker(String name, Counter counter) {
		super(name);
	}
	@Override
	public void run() {
		for (int i = 0; i < 200; i++) {
			counter.increment();
		}
	}

}
