package com.wolftalk.backend.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @Value("${app.debug:false}")
    private boolean debugMode;

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleIllegalArgumentException(
            IllegalArgumentException ex, 
            WebRequest request) {
        Map<String, Object> errorResponse = buildErrorResponse(
            HttpStatus.BAD_REQUEST,
            "BAD_REQUEST",
            ex.getMessage(),
            request.getDescription(false),
            ex
        );
        
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(
            RuntimeException ex, 
            WebRequest request) {
        Map<String, Object> errorResponse = buildErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "RUNTIME_ERROR",
            ex.getMessage(),
            request.getDescription(false),
            ex
        );
        
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGenericException(
            Exception ex, 
            WebRequest request) {
        Map<String, Object> errorResponse = buildErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR,
            "INTERNAL_ERROR",
            "An unexpected error occurred",
            request.getDescription(false),
            ex
        );
        
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }

    private Map<String, Object> buildErrorResponse(
            HttpStatus status,
            String errorCode,
            String message,
            String path,
            Exception ex) {
        
        Map<String, Object> errorResponse = new HashMap<>();
        errorResponse.put("timestamp", LocalDateTime.now().toString());
        errorResponse.put("status", status.value());
        errorResponse.put("error", status.getReasonPhrase());
        errorResponse.put("errorCode", errorCode);
        errorResponse.put("message", message);
        errorResponse.put("path", path.replace("uri=", ""));
        
        // Add detailed error info in debug mode
        if (debugMode && ex != null) {
            errorResponse.put("exceptionType", ex.getClass().getSimpleName());
            errorResponse.put("detailedMessage", ex.toString());
            
            // Add stack trace for debugging
            StackTraceElement[] stackTrace = ex.getStackTrace();
            if (stackTrace.length > 0) {
                Map<String, Object> debugInfo = new HashMap<>();
                debugInfo.put("class", stackTrace[0].getClassName());
                debugInfo.put("method", stackTrace[0].getMethodName());
                debugInfo.put("line", stackTrace[0].getLineNumber());
                errorResponse.put("debugInfo", debugInfo);
            }
        }
        
        return errorResponse;
    }
}
