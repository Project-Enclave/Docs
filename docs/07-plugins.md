# Plugins

Enclave Messenger uses a plugin system to add transports and features without modifying the core.

!!! The plugin system has NOT been properly implemented yet, so just skip this page. This is just for planning the plugin features.

## Plugin structure

Plugins live under core/plugins/:

- base.py - Base classes and interfaces plugins must implement.  
- manager.py - Plugin discovery, loading, and lifecycle.  
- security.py - Security constraints and checks for plugins.  
- builtin/ - Built-in plugins shipped with Enclave.  
  - bluetooth/ - Bluetooth transport plugin.  
  - sms_gateway/ - SMS-based gateway plugin.  

Each plugin typically includes:

- main.py - Implementation of the plugin logic.  
- manifest.json - Metadata (name, version, capabilities, permissions).  

## Writing a plugin

To create a new plugin:

1. Create a directory under core/plugins/ (or a future plugins/ root if you refactor).  
2. Implement the required interfaces from base.py.  
3. Add a manifest.json describing your plugin.  
4. Register or ensure it’s discoverable by manager.py.  

Document the exact API once base.py is stable (methods, expected behavior, error handling).

## Security considerations

- Plugins can access network, storage, and crypto abstractions, so treat them as trusted code.  
- security.py defines constraints; review them when adding new capabilities.  
- For third-party plugins, review code before enabling them in sensitive environments (so every environment # Plugins

Enclave Messenger uses a plugin system to add transports and features without modifying the core.

## Plugin structure

Plugins live under core/plugins/:

- base.py - Base classes and interfaces plugins must implement.  
- manager.py - Plugin discovery, loading, and lifecycle.  
- security.py - Security constraints and checks for plugins.  
- builtin/ - Built-in plugins shipped with Enclave.  
  - bluetooth/ - Bluetooth transport plugin.  
  - sms_gateway/ - SMS-based gateway plugin.  

Each plugin typically includes:

- main.py - Implementation of the plugin logic.  
- manifest.json - Metadata (name, version, capabilities, permissions).  

## Writing a plugin

To create a new plugin:

1. Create a directory under core/plugins/.  
2. Implement the required interfaces from base.py.  
3. Add a manifest.json describing your plugin.  
4. Register or ensure it’s discoverable by manager.py.  

## Security considerations

- Plugins can access network, storage, and crypto abstractions, so treat them as trusted code.  
- security.py defines constraints. Review them when adding new capabilities.  
- For third-party plugins, review code before enabling them in sensitive environments (basically every environment except testing).  
