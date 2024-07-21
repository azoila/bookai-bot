import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts"
import { stringify } from "@libs/xml"


console.log("Bookinho In Action!")

Deno.serve(async (req: Request) => {

    const body = await req.formData();
    const messageBody = body.get("Body").toString();
    const from = body.get("From");

    let message: string;

    if (messageBody == "1") {
        message = "Seu agendamento está confirmado!";
    } else if (messageBody == "0") {
        message = "Não esqueça que estamos aqui, agende conosco!";
    } else {
        message =`
                 Olá, seja bem vindo ao nosso canal de atendimento. 
                
                 1 - para confirmar 
                 0 - para sair.
                `;
    }

    const xmlResponse =  stringify({
        "@version": "1.0",
        "@encoding": "UTF-8",
        Response: {
            Message: {
                Body: message.trim()
            },
        },
    })

    return new Response(xmlResponse, {headers: {"Content-Type": "text/xml"}},)

})
