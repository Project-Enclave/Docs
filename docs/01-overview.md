# Overview

Enclave messenger (sometimes referred as Messenger internally or in some files) is the first part of [Project Enclave](https://github.com/project-enclave/) (also referred as just Enclave or PE in some files and places, i don know. i think i used those abbrs in my physical notes, i dont remember)(also, sorry if this is a bit messy). Messenger is a messenger (that sounds REALLY stupid) that can be used to send messanges (again, im sorry :p) via basiclly anything, including lora, bluetooth, lan, wifi, and other radios, and bridges for stuff like whatsapp, signal, discord, telegram, etc. And its ment to never fail, and it fails 20% of the time for now, great.

It provides:

- TUI for terminal-based usage (This is the main way to use messenger)  
- Python based web UI for browser-based usage
- A plugin system for adding new transports and features (Its still in progress...) 
- E2EE via the python cryptography lib  

This documentation is aimed at:

- Developers contributing to the codebase  
- Users installing and running Enclave  
- Judges/reviewers evaluating the project for competitions and events (for stardance by hackclub for now)  

## Key features

- Multi-profile support with isolated keys and chats
- Peer discovery over local network and plugin-defined transports  
- Pluggable architecture: transports and features live in core/plugins/ (in progress) 
- Signed update manifests (manifest.json + manifest.sig)  
- Test suite using pytest

## Project repositories

- **Messenger code:** [Project-Enclave/Enclave-Messenger](https://github.com/Project-Enclave/Enclave-Messenger)  
- **Website:** [Project-Enclave/Enclave-Messenger-Site](https://github.com/Project-Enclave/Enclave-Messenger-Site)  
- **Assets (screenshots, videos):** [Project-Enclave/assets](https://github.com/Project-Enclave/assets)  
- **Setup scripts:** [Project-Enclave/setup](https://github.com/Project-Enclave/setup)  

## Websites

- [Project Enclave](https://projectenclave.dev)
- [Enclave Messenger](https://messenger.projectenclave.dev/)

## Documentation index

- [Architecture](02-architecture.md)  
- [Security model](03-security-model.md)  
- [Installation](04-installation.md)  
- [Usage](06-usage.md)  
- [Development guide](08-development.md)  

## Notes

The developer of this application is not liable for any misuse or legal issues arising from its use and is not affiliated with anoy of the services/coperations mentioned.

## License

[GNU GPL V3](https://www.gnu.org/licenses/gpl-3.0.en.html)
