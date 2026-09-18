# Usage

This section covers typical user workflows in Enclave Messenger.

## Starting Enclave

### TUI

```bash
python tui.py
```

You will be prompted to:

1. Select or create a profile.  
![A tui with no profile that is creating a profile](https://cdn.hackclub.com/01a0b4f9-81fc-7ca4-9355-f11f56eb3a91/Wed%20Sep%20%209%2007-19-27%20PM%20IST%202026%20TUI-Profile-Creation.jpg)

2. Enter your passkey.
![TUI asking for your passkey](https://cdn.hackclub.com/01a0b4f9-6aed-79fb-b7e8-fa3793e6214e/Fri%20Sep%20%204%2004-39-42%20PM%20IST%202026%20TUI-Passkey-Empty.jpg)
  
3. Access the main menu (home, peers, chats, settings).  
![TUI home for PradhyaTheFirst](https://cdn.hackclub.com/01a0b4f9-7b75-7def-9481-b07840f72261/Fri%20Sep%20%204%2004-56-29%20PM%20IST%202026%20TUI-Home-PrdahyaTheFirst.jpg)

### Web UI

```bash
python web.py
```

Then open the printed URL in a browser, e.g.:

```text
http://localhost:8000
```

The web UI provides:

- Setup wizard for new profiles
![Settings page for profiles](https://cdn.hackclub.com/01a0b4f9-82d2-7e84-8031-10f14aea035c/Wed%20Sep%20%209%2008-02-10%20PM%20IST%202026%20Web-Settings-Profiles-Centered.jpg)

- Home screen with chats and peers 
> NOTE: I advise you to use the TUI because the Web UI is still a bit buggy...
![Web UI Home](https://cdn.hackclub.com/01a0b4fa-3197-76cf-a85a-6eeb46710f38/Wed%20Sep%20%209%2008-10-35%20PM%20IST%202026%20Web-Home-Named.jpg)
 
- Settings for profile management 
![Profile settings](https://cdn.hackclub.com/01a0b4f9-743e-7af1-b45e-3fccaa5ea9e7/Fri%20Sep%20%204%2004-46-55%20PM%20IST%202026%20Web-Settings-Profile-Filled.jpg) 

## Creating a profile

1. Launch Enclave (TUI or web).  
2. Choose **Create new profile**.  
3. Enter:
   - Profile name  
   - Passkey (twice, for confirmation)  
   - Any required network settings (e.g., web port for web UI)  
4. Confirm. Enclave creates the profile and associated keys.  

## Sending a message

1. Ensure at least two profiles are running (on the same or different devices).  
2. In each instance, navigate to **Peers** and confirm discovery.  
3. Open a chat with the desired peer.  
4. Type a message and send.  

Messages are encrypted end-to-end before transmission.

## Managing profiles

- **Rename** a profile from Settings -> Profile.  
- **Create additional profiles** for different identities or test scenarios.  
- **Delete** a profile by removing its directory.
