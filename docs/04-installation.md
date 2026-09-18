# Installation

These instructions cover installing and running Enclave Messenger on your system. Adjust paths and commands for your environment.

## Requirements

- Python 3.10+ 
- pip and a working virtualenv setup (recommended)  
- For Bluetooth plugin: working Bluetooth stack and permissions  
- For SMS gateway plugin: appropriate hardware/gateway access  

## Run The Initial Setup Stuff

### On Linux/MacOS

Run:
```bash
curl -sL https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.sh -o /tmp/enclave-setup.sh && bash /tmp/enclave-setup.sh
```

![A photo of a shell installing messenger by project enclave](https://cdn.hackclub.com/01a0b4f9-65e4-7709-ae9a-939914566b5a/Fri%20Sep%20%204%2004-32-22%20PM%20IST%202026%20Shell-Install-Inprog.jpg)

### On Windows...

> Note that this has NEVER been tested on Windows because I(Chinglen2080 aka Pradhya) do NOT have a windows system/install.

#### Powershell

Run:
```cmd
irm https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.ps1 -OutFile $env:TEMPenclave-setup.ps1; & $env:TEMPenclave-setup.ps1
```

#### Command Prompt

Run:
```cmdp
curl -sL https://raw.githubusercontent.com/Project-Enclave/setup/main/messenger.bat -o %TEMP%enclave-setup.bat
%TEMP%enclave-setup.bat
```
## The Setup Process

The setup script will print a lot of stuff, you can ignore that if you want. But there will be stuff that you have to fill like your posts, name, passphrase, etc

![A photo of Pradhya going through the setup](https://cdn.hackclub.com/01a0b4f9-6a0f-7a54-b5f8-bf97c5572cc3/Fri%20Sep%20%204%2004-38-11%20PM%20IST%202026%20Shell-Install-Passkey-Empty.jpg)
## Run Enclave

### TUI

```bash
python tui.py
```

![TUI where it hasnt been unlocked and is empty](https://cdn.hackclub.com/01a0b4f9-6aed-79fb-b7e8-fa3793e6214e/Fri%20Sep%20%204%2004-39-42%20PM%20IST%202026%20TUI-Passkey-Empty.jpg)

Fill your password so it looks like this-

![TUI where it hasnt been unlocked and is not empty](https://cdn.hackclub.com/01a0b4f9-6b95-7433-95df-ae30f65dff60/Fri%20Sep%20%204%2004-40-15%20PM%20IST%202026%20TUI-Passkey-Filled.jpg)
> Note: DO NOT USE A SHORT/INSECURE PASSWORD! PLEASE!

If you got it correct, then you'll see this!

![TUI Home](https://cdn.hackclub.com/01a0b4f9-6c3a-77ff-9d4e-4340e5b1ccfa/Fri%20Sep%20%204%2004-40-47%20PM%20IST%202026%20TUI-Home.jpg)

### Web UI

```bash
python web.py
```

The shell will look like this-

![A photo of web.py running right after set.py is done](https://cdn.hackclub.com/01a0b4f9-6f7d-7c9c-b76f-23cd476d5c2a/Fri%20Sep%20%204%2004-43-19%20PM%20IST%202026%20Shell-Enclave-Messenger-Web-Start.jpg)

When you go to the link given, you'll see this,

![The login modal on localhost](https://cdn.hackclub.com/01a0b4f9-7065-7ad8-8015-ec96dcb01f2f/Fri%20Sep%20%204%2004-44-46%20PM%20IST%202026%20Web-Passkey-Empty.jpg)

Fill it up!

![The login modal on localhost, but filled!](https://cdn.hackclub.com/01a0b4f9-7178-7663-961a-3fee8c265376/Fri%20Sep%20%204%2004-45-18%20PM%20IST%202026%20Web-Passkey-Filled.jpg)

Tada! You've made it to the home screen!

![The home for the web UI on localhost](https://cdn.hackclub.com/01a0b4f9-7236-70eb-b658-2deaa0dcab03/Fri%20Sep%20%204%2004-45-49%20PM%20IST%202026%20Web-Home.jpg)

You can (and you should) set up other stuff via the web UI in the settings modal like display name and make new profiles to seperate stuff or to test the messenger out!

![The setting modal in the profile section](https://cdn.hackclub.com/01a0b4f9-743e-7af1-b45e-3fccaa5ea9e7/Fri%20Sep%20%204%2004-46-55%20PM%20IST%202026%20Web-Settings-Profile-Filled.jpg)

The long string is just your client id (Aka enclave id)

Then open the displayed URL (typically `http://localhost:<port>`) in a browser.

## First-run flow

On first run, Enclave will:

1. Prompt for a profile name.  
2. Ask for a passkey (used to protect local keys).  
3. Create initial configuration and key files under the profile directory.  

Screenshots of this flow are available in the [Project-Enclave/assets](https://github.com/Project-Enclave/assets) repository.
Ill add how to test the messenger on the same device on a different file.
