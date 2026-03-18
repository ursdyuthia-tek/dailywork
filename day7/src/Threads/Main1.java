package Threads;

class MyTask implements Runnable {
	public void run() {
		System.out.println("task running");
	}
}

public class Main1 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread task = new Thread(new MyTask());
		task.start();

	}

}
