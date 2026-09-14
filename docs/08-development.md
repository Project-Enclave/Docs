# Development Guide

This section is for developers contributing to Enclave Messenger.

## Repository layout

See [Architecture](02-architecture.md) for a detailed map of the codebase.

Key directories:

- core/ - Core logic (crypto, network, plugins, storage).  
- templates/ - Web UI templates.  
- test_*.py - Test suite.  
- docs/ - This documentation.  

## Setting up a development environment

1. Clone the repo and create a virtualenv (see [Installation](04-installation.md)).  
2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Install development tools (optional but recommended):

   ```bash
   pip install pytest
   ```

## Coding conventions

- Use clear, descriptive names for functions and variables.  
- Keep modules focused; avoid god objects.  
- Add type hints where practical.  
- Write tests for new features and bug fixes.  

## Running Enclave during development

Use separate terminals for multiple profiles:

```bash
# Terminal 1
python tui.py
```
```bash
# Terminal 2
python tui.py
```

Or mix TUI and web:

```bash
# Terminal 1
python tui.py
```
```Bash
# Terminal 2
python web.py
```

The launch-two-instances.sh script can help automate this in one terminal but isnt recommend because its very annoying.

## Updating documentation

When adding features or changing behavior:

- Update relevant docs in docs/ of [this repo](https://www.github.com/Project-Enclave/Docs).  
- Update README.md if behavior changes that is visible to the user. ie if you changed the templates/chat.html.  
- Keep security-relevant changes reflected in [Security Model](03-security-model.md).  
