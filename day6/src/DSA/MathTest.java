package DSA;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class MathTest {

    @Test
    void testAdd() {
        int result = Math.addExact(2, 5);
        assertEquals(7, result);
    }

    @Test
    void testAddNegativeNumbers() {
        int result = Math.addExact(-2, -5);
        assertEquals(-7, result);
    }

    @Test
    void testAddNegativeAndPositiveNumbers() {
        int result = Math.addExact(2, -5);
        assertEquals(-3, result);
    }
}