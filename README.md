# FORJA — Treinos com progressão

Aplicativo de treino para Android e PC, com rotina de exercícios, cronômetro, acompanhamento de progresso e sistema de XP e níveis.

## Instalar no Android

1. Baixe `Forja-Android.apk` nos arquivos da versão mais recente, em **Releases**.
2. Abra o APK no Android e confirme a instalação. Se solicitado, permita temporariamente a instalação pelo navegador ou gerenciador de arquivos usado para abri-lo.

O arquivo publicado é um APK de depuração assinado automaticamente pelo Android SDK, adequado para instalação e avaliação direta. Para publicar na Play Store ou distribuir atualizações assinadas de forma consistente, é necessário configurar uma chave de assinatura de lançamento.

## Executar no PC

Requer Node.js 20 ou mais recente.

```powershell
npm install
npm run dev
```

## Gerar APK

Requer Android SDK (plataforma 36 e build-tools) e JDK 21. Configure `JAVA_HOME`, `ANDROID_HOME` e `ANDROID_SDK_ROOT`, depois execute:

```powershell
npm install
npm run android:apk
```

O APK de depuração será salvo em `android/app/build/outputs/apk/debug/app-debug.apk`.

## Funcionalidades

- Quatro planos de treino de demonstração
- Marcação de exercícios e cronômetro de sessão
- XP, níveis, sequência, histórico e conquistas
- Interface responsiva para navegador de PC e Android
- Dados do protótipo salvos localmente no dispositivo

Os planos são exemplos fixos para demonstrar o app. Não substituem uma avaliação ou orientação individual de profissional de educação física.
