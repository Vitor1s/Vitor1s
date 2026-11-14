# Raiden X para Android (toque)

O jogo original é um Flash (`raidenx.swf`, Flash 6, 300×350, 60 fps). Esta versão roda o SWF
original com o emulador **Ruffle** e adiciona controles de toque por cima.

## Como rodar no Android (Termux)

```sh
pkg install python unzip
termux-setup-storage                      # só na primeira vez
unzip ~/storage/downloads/RaidenX-Android.zip -d ~
cd ~/RaidenX-Android
sh iniciar.sh                             # ou: python3 servidor.py
```

Abra o Chrome em **http://localhost:8080** e toque em "TOCAR PARA JOGAR".
Menu ⋮ do Chrome → **Instalar app** / **Adicionar à tela inicial** para ter um ícone.
Depois do primeiro uso o jogo fica em cache e abre também sem o servidor ligado
(o service worker só funciona em http://localhost ou https).

Também funciona hospedando a pasta inteira em qualquer site https
(GitHub Pages, Netlify, etc.). Abrir o `index.html` direto como arquivo **não** funciona
(o Ruffle precisa carregar `.wasm` por http).

## Controles na tela

| Controle | Tecla original | O que faz |
|---|---|---|
| Joystick (painel esquerdo, aparece onde você toca) | Setas | Move a nave, 8 direções |
| TIRO (segurar) | Z | Atira |
| AUTO | Z travado | Liga/desliga tiro automático |
| BOMBA | X | Usa a bomba (o tipo muda conforme o item que você pegou) |
| PAUSA | Ctrl | Pausa / continua |
| START | Enter | Confirma nos menus |
| ⌨ | A–Z, 0–9, Backspace, Enter | Teclado para digitar o nome no ranking |
| ⚙ | – | Modo arrastar, vibração, inverter lados, tamanho, transparência, reiniciar |
| ⛶ | – | Tela cheia |

**Modo arrastar** (em ⚙): a nave segue o dedo em qualquer ponto do jogo, na velocidade
máxima da nave. Desligue para tocar nos botões dos menus do jogo.
Teclado físico e gamepad com mapeamento de teclado também continuam funcionando.

## Arquivos

- `index.html` – interface e controles de toque
- `raidenx.swf` – o jogo original, sem modificações
- `ruffle/` – Ruffle 0.7.1 (Apache-2.0 / MIT), auto-hospedado
- `sw.js`, `manifest.webmanifest`, `icon-*.png` – cache offline e instalação
- `servidor.py`, `iniciar.sh` – servidor local

Se alterar algum arquivo, aumente `V` em `sw.js` para o Chrome atualizar o cache.
