# Windows Instructions

Works out of the box?

# WSL Instructions

## Install

```bash
sudo apt install libsecret-1-0 libsecret-1-dev
sudo make --directory=/usr/share/doc/git/contrib/credential/libsecret
```

## Startup

Make sure VcXsrv / XLaunch is running without access controls.

```bash
sudo service dbus start
dbus-launch
gnome-keyring-daemon --components=secrets --start
```

## Testing

keytar storage results:

```bash
secret-tool search account abjurstrom-test
[/org/freedesktop/secrets/collection/Default_5fkeyring/9]
label = keytar-workbench/abjurstrom-test
secret = HelloWorld
created = 2022-05-18 13:14:08
modified = 2022-05-18 13:14:08
schema = org.freedesktop.Secret.Generic
attribute.account = abjurstrom-test
attribute.service = keytar-workbench
```
