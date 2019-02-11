# install chocolatey
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))

# install applications

choco install putty.install -y
choco install nodejs -y
choco install git --params"/GitAndUnixToolsOnPath /NoShellIntegration"  -y
choco install openssh  -y
choco install ruby  -y
choco install msys2 -y 
choco install vscode  -y
choco install yarn -y
choco install postman -y
choco install etcher -y
choco install poshgit -y
