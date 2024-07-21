## Breve Documentação Técnica Book.AI

Para funcionalidade básica do BOT Twilio + Supabase.

### Twilio

1. Criar uma conta no [Twilio](https://www.twilio.com/).
2. Habilitar o serviço de Messaging.
3. No menu "Try out", vincular o WhatsApp.
4. Configurar a URL no "Sandbox settings" para encaminhar mensagens recebidas para Supabase Edge Functions.

### Supabase

Para utilizar o Supabase no ambiente de desenvolvimento e deploy, siga os passos abaixo:

1. Instalar o [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=linux).

#### Alguns truques para subir o projeto:

* **Exportar o token para o terminal ativo:**

  ```bash
  ➜  export SUPABASE_ACCESS_TOKEN=
  ```

* **Executar localmente:**

  ```bash
  ➜ supabase functions serve --import-map supabase/functions/import_map.json
  ```

* **Fazer o deploy para produção:**

  ```bash
  ➜ supabase functions deploy bot-get --project-ref tpgbhcsidmskfssybmlt --import-map supabase/functions/import_map.json
  ```

* **Fazer um teste:**

```bash
➜ curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/bot-get' \
  --header 'Authorization: Bearer XXXXXXXXXXXXXX
  --data-urlencode "Body=Olá, isto é um teste" \
  --data-urlencode "From=whatsapp:+1234567890" \
  --data-urlencode "To=whatsapp:+0987654321" \
  --data-urlencode "MessageSid=SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" \
  --data-urlencode "AccountSid=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" \
  --data-urlencode "MessagingServiceSid=MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```
