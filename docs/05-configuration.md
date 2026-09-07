# Configuration

Enclave Messenger stores configuration per profile in ~/.enclave-messenger/profiles using the core/storage/config_store.py module.

```text
(.venv) pradhya@pradhya-HP-Laptop-14q-cs0xxx ~/.enclave-messenger> tree
.
├── plugins
│   └── README.md
├── profiles
│   └── PradhyaTheFirst
│       ├── chats
│       ├── config
│       │   └── config.json
│       └── identity
│           ├── crypto_salt.bin
│           ├── ed25519.pem
│           └── x25519.pem
└── registry.json

7 directories, 6 files
```
> My chats folder is empty because i dont have any chats rn... sorry,

## Profile configuration

Each profile has:

- A name (e.g., `PradhyaTheFirst`)  
- A passkey (used locally to protect keys)  
- Associated keys and chat history  

Configuration is created during first-run and updated via the UI (TUI or web).

## Key configuration options

These are typically set interactively,

- Profile name - Human-readable identifier for the profile.  
- Passkey - Local secret used to protect key material; not transmitted over the network.  
- Web port (for web UI) - TCP port the web server listens on.  
- Transport settings - Plugin-specific options (e.g., Bluetooth device, SMS gateway endpoint).  

## Config files location

By default, profiles and configs live in ~/.enclave-messenger managed by config_store.py.

- `~/.enclave-messenger/profiles/<profile_name>/`  
