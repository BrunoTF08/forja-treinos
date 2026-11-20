# FORJA — Treinos com progressão

Aplicativo de treino para Android e PC, com conta por e-mail, progresso sincronizado, rotina de exercícios, cronômetro, XP e níveis. Perfis novos começam zerados.

## Configurar contas e sincronização

O login e o progresso compartilhado entre Android e PC usam Supabase.

1. Crie um projeto no Supabase.
2. No **SQL Editor**, execute [`supabase/schema.sql`](supabase/schema.sql). A tabela aplica RLS para cada pessoa ler e alterar somente o próprio progresso.
3. Copie `.env.example` para `.env` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` com os dados do seu projeto. A chave deve ser a chave publicável (ou a antiga `anon`); nunca use `service_role` no app.
4. Em Authentication, habilite o cadastro por e-mail e configure as URLs permitidas de confirmação/recuperação para o endereço usado pelo app.

Sem configurar o projeto Supabase, a tela de login aparece, mas o cadastro e o acesso ficam desativados. `.env` não deve ser enviado ao GitHub.

## Executar no PC

Requer Node.js 20 ou mais recente.

```powershell
npm install
npm run dev
```

## Gerar APK Android

Requer Android SDK (plataforma 36 e build-tools) e JDK 21. Com o `.env` preenchido:

```powershell
npm install
npm run android:apk
```

O APK será salvo em `android/app/build/outputs/apk/debug/app-debug.apk`. Cada APK incorpora as configurações públicas do projeto Supabase necessárias para conectar; use somente a chave publicável protegida por RLS.

## Funcionalidades

- Cadastro, entrada e recuperação de senha por e-mail
- Progresso separado por conta e sincronizado entre dispositivos
- Perfil novo com XP, sequência e sessões em zero
- Quatro rotinas de treino de demonstração
- Cronômetro, registro de exercícios e conquistas
- Interface responsiva para navegador de PC e Android

Os planos são exemplos fixos para demonstrar o app. Não substituem uma avaliação ou orientação individual de profissional de educação física.
