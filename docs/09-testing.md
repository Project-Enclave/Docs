# Testing

Enclave Messenger uses pytest for its test suite.

## Running tests

From the project root:

```bash
pytest
```

To run a specific test file:

```bash
pytest test_crypto_performance.py
pytest test_dht.py
pytest test_multi_profile.py
```

## Test coverage

Current test files include:

- test_crypto.py (in core/crypto/) - Crypto primitives and E2E logic.  
- test_crypto_performance.py - Performance characteristics of crypto operations.  
- test_dht.py - DHT behavior.  
- test_multi_profile.py, test_profile_creation.py - Profile workflows.  
- test_security_fixes.py - Security-related fixes and regressions.  
- test_sms_gateway.py - SMS gateway plugin tests.  
- test_tui.py, test_web_multi_profile.py, test_ws_push.py - UI and networking tests.  
- test_update.py - Update mechanism tests.  

Some tests may require specific hardware or configuration (e.g., Bluetooth, SMS gateway, Lora).

## Adding new tests

When adding features:

- Create a new test_*.py file or extend an existing one.  
- Use descriptive test names (test_<scenario>_<expected>.py).  
- Aim for deterministic, repeatable tests; mock hardware-dependent parts where needed.  
