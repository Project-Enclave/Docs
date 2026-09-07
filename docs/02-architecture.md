# Architecture

Enclave Messenger is organized around a modular core in the core/ directory, with separate interfaces for TUI and web.

## High-level components

- main.py - Entry point; initializes core and joins everything together. This is like the community hall (or hub ig) where everyone meets.
- core/ - Everything thats really important, like crypto and *trans*port.
  - auth.py - Authentication and session handling for both tui and web UI and other UIs i guess.  
  - crypto/ - Cryptography and E2E logic.
    - crypto_manager.py -  High-level crypto operations.  
    - e2e.py - End-to-end encryption workflows.  
    - test_crypto.py - Crypto unit tests.  
  - identity/ - Identity and key management.  
    - key_manager.py - Generation, storage, and lookup of keys.  
  - network/ - Networking, discovery, and routing.  
    - dht.py, discovery.py, peer.py, router.py, scanner.py, transport.py  
  - plugins/ - Plugin system and built-in plugins.  
    - base.py, manager.py, security.py  
    - builtin/bluetooth/, builtin/sms_gateway/  
  - storage/ - Persistent storage abstractions.  
    - chat_store.py, config_store.py, key_store.py, log_store.py, peer_store.py  
  - profiles.py - Multi-profile orchestration.  
- tui.py - Text-based UI implementation.  
- web.py - Web server and routes and also serves templates/chat.html.  
- templates/ - HTML templates for the web UI.  
- update.py - Update mechanism using signed manifests.  
- test_*.py - Test suite for various subsystems.  

## Data flow (Simplified)

1. User interacts via TUI or web UI.  
2. UI calls into core/ (profiles, crypto, network).  
3. Plugins provide transports (Bluetooth, SMS, etc.)(More like its supposed to but whatever ig).  
4. Messages are encrypted in core/crypto/, routed via core/network/, and stored via core/storage/.
5. All user data is saved in ~/.enclave-messenger/
