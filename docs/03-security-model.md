# Security Model

This section describes how Enclave Messenger protects user data and communications.

## Threat model (summary)

Enclave assumes:

- Devices may be physically accessible to attackers (e.g., shared computers).  
- Network traffic may be observed or modified by local attackers.  
- Servers (if any) are untrusted; confidentiality must not rely on them.  

Primary goals:

- Confidentiality: Only intended recipients can read messages.  
- Integrity: Tampering with messages or profiles is detectable.  
- Authenticity: Peers can verify who sent a message.  

## Cryptography

- Uses the cryptography library for primitives.  
- End-to-end encryption is implemented in core/crypto/e2e.py and core/crypto/crypto_manager.py.  
- Keys are managed by core/identity/key_manager.py and stored via core/storage/key_store.py.  

Key points:

- Each profile has its own key material.  
- Messages are encrypted per-recipient; the server or relay does not hold plaintext.  
- Update manifests (manifest.json) are signed; signature is stored in manifest.sig.  

## Storage

- Chat history, configs, and keys are stored locally via the core/storage/ modules.  
- Keys are separated from chat data (key_store.py vs chat_store.py).  

## Plugin security

- Plugins live under core/plugins/ and are loaded by manager.py.  
- security.py defines constraints and checks for plugin behavior and acts like a watchdog (Its ment to act like a watchdog).  
- Built-in plugins (Bluetooth, SMS gateway) are treated as trusted; third-party plugins should be reviewed before use.  

## Limitations

- No formal security audit has been performed.  
- Key backup/recovery mechanisms are minimal or experimental.  
- Multi-device sync and advanced threat models (e.g., compromised device) are not fully solved yet.  
