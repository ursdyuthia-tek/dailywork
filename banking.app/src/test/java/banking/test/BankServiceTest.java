package banking.test;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import banking.app.banking.model.Account;
import banking.app.banking.service.BankService;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class BankServiceTest {

	@Mock
	private AccountRepository repository;

	@InjectMocks
	private BankService bankService;

	private Account account;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		account = new Account(1, "Amit", 1000);
	}

	@Test
	void testDeposit() {
		when(repository.findById(1)).thenReturn(account);// mocking
		bankService.deposit(1, 500);
		assertEquals(1500, account.getBalance());
		verify(repository).save(account);
	}

	@Test
	void testWithdrawInsufficientBalance() {

		when(repository.findById(1)).thenReturn(account);
		assertThrows(IllegalArgumentException.class, () -> bankService.withdraw(1, 2000));
		verify(repository, never()).save(any());
	}

	@Test
	void testWithdrawSuccess() {
		when(repository.findById(1)).thenReturn(account);
		bankService.withdraw(1, 500);
		assertEquals(500, account.getBalance());
		verify(repository).save(account);
	}

	@Test
	void testDepositAccountNotFound() {
		when(repository.findById(2)).thenReturn(null);
		assertThrows(IllegalArgumentException.class, () -> bankService.deposit(2, 500));
		verify(repository, never()).save(any());
	}

	@Test
	void testWithdrawAccountNotFound() {
		when(repository.findById(2)).thenReturn(null);
		assertThrows(IllegalArgumentException.class, () -> bankService.withdraw(2, 500));
		verify(repository, never()).save(any());
	}

	@Test
	void testDepositNegativeAmount() {
		when(repository.findById(1)).thenReturn(account);
		assertThrows(IllegalArgumentException.class, () -> bankService.deposit(1, -100));
		verify(repository, never()).save(any());
	}

	@Test
	void testWithdrawNegativeAmount() {
		when(repository.findById(1)).thenReturn(account);
		assertThrows(IllegalArgumentException.class, () -> bankService.withdraw(1, -100));
		verify(repository, never()).save(any());
	}

}
