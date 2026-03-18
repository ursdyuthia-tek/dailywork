package Threads;

class BankAccount {
	private int balance;
	
	public BankAccount(int balance) {
		this.balance = balance;
	}
	public synchronized int getBalance() {
		return balance;
	}
	public synchronized boolean withdraw(int amount) {
		System.out.println(Thread.currentThread().getName() + " checking balance...");
		
		if(balance >= amount) {
			balance -= amount;
			return true;
		}
		return false;
	}
	
	public synchronized void deposite(int amount) {
		try {
			Thread.sleep(300);
		} catch (InterruptedException e) {}
		balance += amount;
	}
}


	
	


