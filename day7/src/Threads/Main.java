package Threads;

public class Main {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Thread thread = new MyThread();
		thread.start();
		Thread task = new Thread(new MyTask());
		task.start();

	}

}
