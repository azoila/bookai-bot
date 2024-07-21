import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts"
// import * as xml from "https://deno.land/x/xml@5.4.12/mod.ts";
import { stringify } from "@libs/xml"


console.log("Bookinho In Action!")

Deno.serve(async (req) => {

    const body = await req.formData();
    const messageBody = body.get("Body");
    const from = body.get("From");

    let message = "";

    if (messageBody == 1) {
        message = "Seu agendamento está confirmando!";
    } else if (messageBody == 0) {
        message = "Não esqueça que estamos aqui, precisando agende conosco!";
    } else {
        message =`
                 Deseja Agendar Conosco, digite ? 
                
                 1 para confirmar 
                 0 para sair.
                `;
    }

    const xmlResponse =  stringify({
        "@version": "1.0",
        "@encoding": "UTF-8",
        Response: {
            Message: {
                Body: message
            },
        },
    })

    return new Response(xmlResponse, {headers: {"Content-Type": "text/xml"}},)

})
