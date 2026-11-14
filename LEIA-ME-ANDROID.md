# Raiden X — projeto Android

Este projeto empacota o jogo e o Ruffle dentro de um aplicativo Android. Depois de instalado,
o jogo abre sem Termux, sem servidor local e sem conexão com a internet.

## Gerar o APK

1. Instale o **Android Studio** em um computador.
2. Extraia este ZIP.
3. No Android Studio, escolha **Open** e selecione a pasta `RaidenX-Android-APK-Project`.
4. Aguarde a sincronização do Gradle. Se solicitado, instale o Android SDK 35 e aceite as licenças.
5. No menu **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
6. O APK de depuração será criado em:
   `app/build/outputs/apk/debug/app-debug.apk`
7. Envie esse APK para o celular Android e abra-o para instalar. Se necessário, permita
   a instalação de apps desta origem nas configurações do Android.

## Requisitos

- Android Studio com Android SDK 35
- JDK 17 ou superior (o Android Studio pode fornecer o JDK automaticamente)
- Android 6.0 (API 23) ou superior no celular

## Observações

- O jogo original em Flash é executado pelo Ruffle incluído no pacote.
- Os arquivos do jogo ficam em `app/src/main/assets/www/`.
- Não remova os arquivos `.wasm` da pasta `ruffle`.
- O app usa WebView do Android e armazenamento local para as configurações.
- Este ambiente não possui Android SDK/Gradle instalado; portanto, o APK ainda precisa ser
  compilado no Android Studio. O projeto está preparado para essa compilação.
