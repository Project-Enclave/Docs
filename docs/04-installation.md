# Installation

These instructions cover installing and running Enclave Messenger on your system. Adjust paths and commands for your environment.

## Requirements

- Python 3.10+ (or your minimum supported version)  
- pip and a working virtualenv setup (recommended)  
- For Bluetooth plugin: working Bluetooth stack and permissions  
- For SMS gateway plugin: appropriate hardware/gateway access  

## Run The Initial Setup Stuff

### On Linux/MacOS

Run:
```bash
curl -sL https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.sh -o /tmp/enclave-setup.sh && bash /tmp/enclave-setup.sh
```

![A photo of a shell installing messenger by project enclave](https://github.com/Project-Enclave/assets/blob/main/Screenshots/Fri%20Sep%20%204%2004:32:22%20PM%20IST%202026%20Shell-Install-Inprog.jpg?raw=true)

### On Windows...

> Note that this has NEVER been tested on Windows because I(Chinglen2080 aka Pradhya) do NOT have a windows system/install.

#### Powershell

Run:
'''cmd
irm https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.ps1 -OutFile $env:TEMPenclave-setup.ps1; & $env:TEMPenclave-setup.ps1
```

#### Command Prompt

Run:
```cmdp
curl -sL https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.bat -o %TEMP%enclave-setup.bat
%TEMP%enclave-setup.bat
```

## Run Enclave

### TUI

```bash
python tui.py
```

![TUI where it hasnt been unlocked and is empty](https://github.com/Project-Enclave/assets/blob/main/Screenshots/Fri%20Sep%20%204%2004:39:42%20PM%20IST%202026%20TUI-Passkey-Empty.jpg?raw=true)

Fill your password so it looks like this-

![TUI where it hasnt been unlocked and is not empty](https://github.com/Project-Enclave/assets/blob/main/Screenshots/Fri%20Sep%20%204%2004:40:15%20PM%20IST%202026%20TUI-Passkey-Filled.jpg?raw=true)
> Note: DO NOT USE A SHORT/UNSECURE PASSWORD! PLEASE!

If you got it correct, then you'll see this!

![TUI Home](https://github.com/Project-Enclave/assets/blob/main/Screenshots/Fri%20Sep%20%204%2004:40:47%20PM%20IST%202026%20TUI-Home.jpg?raw=true)

### Web UI

```bash
python web.py
```

Then open the displayed URL (typically `http://localhost:<port>`) in a browser.

## First-run flow

On first run, Enclave will:

1. Prompt for a profile name.  
2. Ask for a passkey (used to protect local keys).  
3. Create initial configuration and key files under the profile directory.  

Screenshots of this flow are available in the [Project-Enclave/assets](https://github.com/Project-Enclave/assets) repository.
