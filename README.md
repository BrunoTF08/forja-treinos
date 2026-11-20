# FORJA — Treinos com progressão

Aplicativo de treino para Android e PC. Na primeira abertura, a pessoa informa o nome e começa no nível 1, com 0 XP e sem sessões registradas. Não é necessário criar conta nem conectar a um servidor.

O nome e o progresso ficam salvos localmente no aparelho ou navegador. Para trocar de perfil, toque no avatar no canto superior direito e escolha outro nome. Android e PC mantêm seus próprios dados.

## Executar no PC

Requer Node.js 20 ou mais recente.

```powershell
npm install
npm run dev
```

## Gerar APK Android

Requer Android SDK (plataforma 36 e build-tools) e JDK 21.

```powershell
npm install
npm run android:apk
```

O APK será salvo em `android/app/build/outputs/apk/debug/app-debug.apk`.

## Funcionalidades

- Perfil simples com nome, sem login ou senha
- Perfil novo começa no nível 1 com progresso zerado
- Quatro rotinas de treino de demonstração
- Cronômetro, marcação de exercícios, XP e conquistas
- Interface para navegador de PC e Android

Os planos são exemplos para demonstrar o app. Não substituem orientação individual de profissional de educação física.
