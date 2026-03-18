package com.tek.logging;

import java.util.logging.Logger;

public class LoggingExample {

    
    public static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    public static void main(String[] args) {
        // Log messages
        logger.info("Application started");
        logger.warning("Low memory warning");
        logger.severe("System failure");
    }
}